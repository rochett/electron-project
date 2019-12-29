import React, { useState, useEffect } from 'react';
import { Col, Card, Form, Tabs, Tab, InputGroup, Modal, Button } from 'react-bootstrap';
import { faVideo, faGlobeAmericas, faCheck, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SelectGeral from "../../components/select/selectGeral";
import firebase from "firebase/app";
import '../../components/uploader/css/bootstrap.min.css';
import '../../components/uploader/css/styleUpload.css';
import SaveData from '../../function/saveData';
import UploadFile from '../../components/uploader/uploadFile';
import swal from 'sweetalert';
import ButtonSwap from '../../components/button/buttonSwap';
import FormPais from '../../form/pais/formPais';

export default function FormFilme({ tableData, titleTag }) {

    const [show, setShow] = useState(false);
    const [selectGeral, setSelectGeral] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [titulo_original, setTituloOriginal] = useState('');
    const [sinopse, setSinopse] = useState('');
    const [ano_lancamento, setAnoLancamento] = useState('');
    const [trailer, setTrailer] = useState('');
    const [diretor, setDiretor] = useState('');    
    const [genero, setGenero] = useState('');    
    const [pais_origem, setPaisOrigem] = useState('');
    const [premiacoes, setPremiacoes] = useState('');
    const [atores, setAtores] = useState(''); 
    const [roteiristas, setRoteiristas] = useState(''); 
    const [curiosidades, setCuriosidades] = useState(''); 
    const [comentario_trailer, setComentarioTrailer] = useState(''); 

    useEffect(() => {
        firebase.database().ref(`${tableData}/`).on('value', function (_selectGeral) {
            setSelectGeral(_selectGeral.val());
        });
    }, []);

    //Preenchendo o nome do arquivo no select
    const handleChange = event => {
        var fileName = event.currentTarget.value.split("\\").pop();
        var retorno = document.getElementById("labelFile");
        retorno.innerHTML = fileName;
    }

    const handleClick = event => {
        var validacao = handleValidate();
        if (validacao === true) {             
            const _dados = {
                titulo: titulo,
                titulo_original: titulo_original,
                sinopse: sinopse,
                ano_lancamento: ano_lancamento,
                trailer: trailer,
                diretor: diretor,
                genero: genero,
                pais_origem: pais_origem,
                premiacoes: premiacoes,
                elenco: atores,
                roteirista: roteiristas,
                curiosidades: curiosidades,
                comentario_trailer: comentario_trailer,
                image_upload: document.getElementById("image_upload").files[0]
            };            
            var dadosId = selectGeral && selectGeral[selectGeral.length - 1].id + 1;
            SaveData(tableData, _dados, dadosId);
            event.preventDefault();
            handleClear();
        } else {
            swal({
                title: "Erro!",
                text: "Há campos não preenchidos!",
                icon: "error"
            });
        }    
    }

    const handleValidate = event => {
        if (titulo && titulo_original && sinopse && ano_lancamento && atores && premiacoes) {
            return true;
        } else {
            return false;
        }
    }    

    const handleClear = event => {            
        setTitulo('');
        setTituloOriginal('');
        setSinopse('');
        setAnoLancamento('');
        setTrailer('');
        setDiretor('');
        setGenero('');        
        setPaisOrigem('');        
        setPremiacoes('');
        setAtores('');
        setRoteiristas('');
        setCuriosidades('');
        setComentarioTrailer('');
        document.getElementById("image_upload").value = '';
        document.getElementById("labelFile").innerHTML = 'Nenhum Arquivo Selecionado';
    } 

    return (

        <>
            <Tabs defaultActiveKey="ficha" id="uncontrolled-tab-example">
                <Tab eventKey="ficha" title="Ficha Técnica">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Ficha Técnica</Card.Header>
                        <Card.Body>
                        <Form.Row>
                                <Form.Group as={Col} md="6" controlId="titulo">
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Título"
                                        size="sm"
                                        value={titulo}
                                        onChange={(e) => setTitulo(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="titulo_original">
                                    <Form.Label>Título Original</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Título Original"
                                        size="sm"
                                        value={titulo_original}
                                        onChange={(e) => setTituloOriginal(e.target.value)}
                                    />
                                </Form.Group>
                            </Form.Row> 

                            <Form.Row>
                                <Form.Group as={Col} md="5" controlId="diretor">
                                    <Form.Label>Direção</Form.Label>
                                    <Form.Control 
                                        as="select" 
                                        required size="sm"
                                        value={diretor}
                                        onChange={(e) => setDiretor(e.target.value)}
                                        >
                                        <SelectGeral tableData="diretores" valueTag="nome" />
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} md="3" controlId="pais_origem">
                                    <Form.Label>País de Origem</Form.Label>
                                    <InputGroup className="mb-2" size="sm">
                                        <InputGroup.Prepend onClick={() => setShow(true)}>
                                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faGlobeAmericas} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control 
                                            as="select" 
                                            required size="sm"
                                            value={pais_origem}
                                            onChange={(e) => setPaisOrigem(e.target.value)}
                                            >
                                            <SelectGeral tableData="pais_origem" valueTag="nome" />
                                        </Form.Control>
                                    </InputGroup>                                    
                                </Form.Group>

                                <Form.Group as={Col} md="3" controlId="genero">
                                    <Form.Label>Gênero</Form.Label>
                                    <Form.Control 
                                        as="select" 
                                        required size="sm"
                                        value={genero}
                                        onChange={(e) => setGenero(e.target.value)}
                                        >
                                        <SelectGeral tableData="generos" valueTag="titulo" />
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} md="1" controlId="lancamento">
                                    <Form.Label>Lançamento</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="Lançamento"
                                        size="sm"
                                        min="0"
                                        max="9999"
                                        value={ano_lancamento}
                                        onChange={(e) => setAnoLancamento(e.target.value)}
                                    />                                    
                                </Form.Group>   
                            </Form.Row>
                        </Card.Body>

                        <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            dialogClassName="Modal-Medio"
                            aria-labelledby="example-custom-modal-styling-title"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title><FontAwesomeIcon icon={faGlobeAmericas} />&nbsp;Dados do País de Origem</Modal.Title>
                            </Modal.Header>
                            <Modal.Body><FormPais tableData="pais_origem" /></Modal.Body>
                        </Modal>                        

                    </Card>
                </Tab>

                <Tab eventKey="elenco" title="Elenco">
                <hr></hr>
                    <Card>
                        <Card.Header as="h5">Listagem de Elenco</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="5" controlId="atores-a">
                                    <Form.Label>Atores/Atrizes</Form.Label>
                                    <Form.Control as="select" size="sm" style={{ height: '136px' }} multiple>
                                        <SelectGeral 
                                            tableData="atores" 
                                            valueTag="nome" 
                                            fieldTag="ano_estreia" 
                                        />
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} md="1" controlId="validationCustom01">
                                    <ButtonSwap titleTag="atores" />
                                </Form.Group>

                                <Form.Group as={Col} md="6" controlId="atores">
                                    <Form.Label>Listagem de Elenco</Form.Label>
                                    <Form.Control 
                                    as="textarea" 
                                    rows="6" 
                                    style={{ resize: 'none', multiline: 'true' }} 
                                    size="sm" 
                                    required 
                                    value={atores}  
                                    onChange={(e) => setAtores(e.target.value)}
                                    onFocus={(e) => setAtores(e.target.value)}/>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="roteiro" title="Roteiro">
                <hr></hr>
                    <Card>
                        <Card.Header as="h5">Listagem de Roteiristas</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="5" controlId="roteiristas-a">
                                    <Form.Label>Roteiristas</Form.Label>
                                    <Form.Control as="select" size="sm" style={{ height: '136px' }} multiple>
                                        <SelectGeral 
                                            tableData="roteiristas" 
                                            valueTag="nome" 
                                            fieldTag="ano_estreia" 
                                        />
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} md="1" controlId="validationCustom01">
                                    <ButtonSwap titleTag="roteiristas" />
                                </Form.Group>

                                <Form.Group as={Col} md="6" controlId="roteiristas">
                                    <Form.Label>Listagem de Roteiristas</Form.Label>
                                    <Form.Control 
                                    as="textarea" 
                                    rows="6" 
                                    style={{ resize: 'none', multiline: 'true' }} 
                                    size="sm" 
                                    required 
                                    value={roteiristas}  
                                    onChange={(e) => setRoteiristas(e.target.value)}
                                    onFocus={(e) => setRoteiristas(e.target.value)}/>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="sinopse" title="Sinopse">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Sinopse</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                    <Form.Group as={Col} md="12" controlId="sinopse">
                                        <Form.Label>Informe a Sinopse do { titleTag }</Form.Label>
                                        <Form.Control 
                                        as="textarea" 
                                        rows="4" 
                                        style={{ resize: 'none' }} 
                                        size="sm" 
                                        required 
                                        value={sinopse}
                                        onChange={(e) => setSinopse(e.target.value)}
                                        />
                                    </Form.Group>                                
                            </Form.Row>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="premiacao" title="Premiações">
                <hr></hr>
                    <Card>
                        <Card.Header as="h5">Listagem de Premiações</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="5" controlId="premiacoes-a">
                                    <Form.Label>Premiações</Form.Label>
                                    <Form.Control as="select" size="sm" style={{ height: '136px' }} multiple>
                                        <SelectGeral 
                                            tableData="premiacoes" 
                                            valueTag="titulo" 
                                            fieldTag="ano_criacao" 
                                        />
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} md="1" controlId="validationCustom01">
                                    <ButtonSwap titleTag="premiacoes" />
                                </Form.Group>

                                <Form.Group as={Col} md="6" controlId="premiacoes">
                                    <Form.Label>Listagem de Premiações</Form.Label>
                                    <Form.Control 
                                    as="textarea" 
                                    rows="6" 
                                    style={{ resize: 'none', multiline: 'true' }} 
                                    size="sm" 
                                    required 
                                    value={premiacoes}  
                                    onChange={(e) => setPremiacoes(e.target.value)}
                                    onFocus={(e) => setPremiacoes(e.target.value)}/>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="trailer" title="Trailer">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Trailer</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="trailer">
                                    <Form.Label>URL Trailer</Form.Label>
                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faVideo} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="URL Trailer"
                                            size="sm"
                                            controlId="trailer"
                                            controlName="trailer"
                                            value={trailer}
                                            onChange={(e) => setTrailer(e.target.value)}
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="biografia">
                                    <Form.Label>Comentário sobre o Trailer</Form.Label>
                                    <Form.Control 
                                    as="textarea" 
                                    rows="4" 
                                    style={{ resize: 'none' }} 
                                    size="sm" 
                                    required 
                                    value={comentario_trailer}
                                    onChange={(e) => setComentarioTrailer(e.target.value)}
                                    />
                                </Form.Group>                                
                            </Form.Row>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="cartaz" title="Cartaz/Curiosidades">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Cartaz/Curiosidades</Card.Header>
                        <Card.Body>
                            <UploadFile handleChange={handleChange} />
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="biografia">
                                    <Form.Label>Curiosidades sobre o { titleTag }</Form.Label>
                                    <Form.Control 
                                    as="textarea" 
                                    rows="4" 
                                    style={{ resize: 'none' }} 
                                    size="sm" 
                                    required 
                                    value={curiosidades}
                                    onChange={(e) => setCuriosidades(e.target.value)}
                                    />
                                </Form.Group>                                
                            </Form.Row>
                        </Card.Body>
                    </Card>
                </Tab>

            </Tabs>

            <br></br>

            <div className="row" width="100%">
                <div className="col-6">
                    <Button type="button" variant="primary" onClick={handleClick} ><FontAwesomeIcon icon={faCheck} />&nbsp;Salvar</Button>
                </div>
                <div className="col-6" align="right">
                    <Button type="button" variant="danger" onClick={handleClear} ><FontAwesomeIcon icon={faSyncAlt} />&nbsp;Limpar</Button>
                </div>
            </div>

        </>

    );
}

