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
import '../../styles.css';

export default function FormFilme({ tableData, titleTag, idForm, dadosReg }) {

    const [show, setShow] = useState(false);
    const [selectGeral, setSelectGeral] = useState([]);
    const [selectDadosGeral, setSelectDadosGeral] = useState([]);
    const [titulo, setTitulo] = useState(dadosReg.titulo ? dadosReg.titulo : '');
    const [titulo_original, setTituloOriginal] = useState(dadosReg.titulo_original ? dadosReg.titulo_original : '');
    const [sinopse, setSinopse] = useState(dadosReg.sinopse ? dadosReg.sinopse : '');
    const [ano_lancamento, setAnoLancamento] = useState(dadosReg.ano_lancamento ? parseInt(dadosReg.ano_lancamento) : '');
    const [trailer, setTrailer] = useState(dadosReg.trailer ? dadosReg.trailer : '');
    const [diretor, setDiretor] = useState(dadosReg.diretor ? dadosReg.diretor : '');
    const [genero, setGenero] = useState(dadosReg.genero ? dadosReg.genero : '');
    const [pais_origem, setPaisOrigem] = useState(dadosReg.pais_origem ? dadosReg.pais_origem : '');
    const [premiacoes, setPremiacoes] = useState(dadosReg.premiacoes ? dadosReg.premiacoes : '');
    const [atores, setAtores] = useState(dadosReg.elenco ? dadosReg.elenco : '');
    const [roteiristas, setRoteiristas] = useState(dadosReg.roteirista ? dadosReg.roteirista : '');
    const [curiosidades, setCuriosidades] = useState(dadosReg.curiosidades ? dadosReg.curiosidades : '');
    const [comentario_trailer, setComentarioTrailer] = useState(dadosReg.comentario_trailer ? dadosReg.comentario_trailer : '');

    useEffect(() => {
        if (idForm > -1) {
            document.getElementById("labelFile").innerHTML = dadosReg.nome_imagem ? dadosReg.nome_imagem : 'Nenhum Arquivo Selecionado';
        }
    }, []);

    useEffect(() => {
        firebase.database().ref(`${tableData}/`).on('value', function (_selectGeral) {
            setSelectGeral(_selectGeral.val());
        });
    }, []);

    useEffect(() => {
        firebase.database().ref('pais_origem/').on('value', function (_selectDadosGeral) {
            setSelectDadosGeral(_selectDadosGeral.val());
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
            var imagemAtual = dadosReg.nome_imagem;
            var imagemBanco = dadosReg.cartaz;
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
                nome_imagem: document.getElementById("labelFile").innerHTML,
                image_upload: document.getElementById("image_upload").files[0]
            };
            var dadosId = 0;
            if (idForm < 0) {
                dadosId = selectGeral && selectGeral[selectGeral.length - 1].id + 1;
            } else {
                dadosId = idForm;
            }
            SaveData(tableData, _dados, dadosId, imagemAtual, imagemBanco);
            if (idForm < 0) {
                event.preventDefault();
                handleClear();
            }
        } else {
            swal({
                title: "Erro!",
                text: "Há campos não preenchidos!",
                icon: "error"
            });
        }
    }

    const handleValidate = event => {
        if (titulo && titulo_original && sinopse && ano_lancamento
            && atores && premiacoes && diretor && genero && trailer
            && pais_origem && curiosidades && comentario_trailer && roteiristas &&
            document.getElementById("labelFile").innerHTML !== 'Nenhum Arquivo Selecionado') {
            return true;
        } else {
            return false;
        }
    }

    const handleClear = event => {
        setTitulo(dadosReg.titulo ? dadosReg.titulo : '');
        setTituloOriginal(dadosReg.titulo_original ? dadosReg.titulo_original : '');
        setSinopse(dadosReg.sinopse ? dadosReg.sinopse : '');
        setAnoLancamento(dadosReg.ano_lancamento ? parseInt(dadosReg.ano_lancamento) : '');
        setTrailer(dadosReg.trailer ? dadosReg.trailer : '');
        setDiretor(dadosReg.diretor ? dadosReg.diretor : '');
        setGenero(dadosReg.genero ? dadosReg.genero : '');
        setPaisOrigem(dadosReg.pais_origem ? dadosReg.pais_origem : '');
        setPremiacoes(dadosReg.premiacoes ? dadosReg.premiacoes : '');
        setAtores(dadosReg.elenco ? dadosReg.elenco : '');
        setRoteiristas(dadosReg.roteirista ? dadosReg.roteirista : '');
        setCuriosidades(dadosReg.curiosidades ? dadosReg.curiosidades : '');
        setComentarioTrailer(dadosReg.comentario_trailer ? dadosReg.comentario_trailer : '');
        document.getElementById("image_upload").value = '';
        document.getElementById("labelFile").innerHTML = dadosReg.nome_imagem ? dadosReg.nome_imagem : 'Nenhum Arquivo Selecionado';
    }

    return (

        <>
            <Tabs defaultActiveKey="ficha" id="uncontrolled-tab-example">
                <Tab eventKey="ficha" title="Ficha Técnica">
                    <br></br>
                    <Card>
                        <Card.Header as="h5">Ficha Técnica</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Título"
                                        size="sm"
                                        id="titulo"
                                        value={titulo}
                                        onChange={(e) => setTitulo(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Título Original</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Título Original"
                                        size="sm"
                                        id="titulo_original"
                                        value={titulo_original}
                                        onChange={(e) => setTituloOriginal(e.target.value)}
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} md="5">
                                    <Form.Label>Direção</Form.Label>
                                    <Form.Control
                                        as="select"
                                        required size="sm"
                                        id="diretor"
                                        value={diretor}
                                        onChange={(e) => setDiretor(e.target.value)}
                                    >
                                        <option value=""></option>
                                        <SelectGeral tableData="diretores" valueTag="nome" />
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} md="3">
                                    <Form.Label>País de Origem</Form.Label>
                                    <InputGroup className="mb-2" size="sm">
                                        <InputGroup.Prepend onClick={() => setShow(true)}>
                                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faGlobeAmericas} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            as="select"
                                            required size="sm"
                                            id="pais_origem"
                                            value={pais_origem}
                                            onChange={(e) => setPaisOrigem(e.target.value)}
                                        >
                                            <option value=""></option>
                                            {
                                                selectDadosGeral && selectDadosGeral.map((text, i) => <option key={i} value={text.nome} >
                                                    {text.nome}</option >)
                                            }
                                        </Form.Control>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group as={Col} md="3">
                                    <Form.Label>Gênero</Form.Label>
                                    <Form.Control
                                        as="select"
                                        required size="sm"
                                        id="genero"
                                        value={genero}
                                        onChange={(e) => setGenero(e.target.value)}
                                    >
                                        <option value=""></option>
                                        <SelectGeral tableData="generos" valueTag="titulo" />
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} md="1">
                                    <Form.Label>Lançamento</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="Ano"
                                        size="sm"
                                        min="0"
                                        max="9999"
                                        id="lancamento"
                                        value={ano_lancamento}
                                        onChange={(e) => setAnoLancamento(e.target.value)}
                                    />
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="elenco" title="Elenco"> 
                    <br></br>
                    <Card>
                        <Card.Header as="h5">Listagem de Elenco</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="5">
                                    <Form.Label>Atores/Atrizes</Form.Label>
                                    <Form.Control
                                        as="select"
                                        size="sm"
                                        id="atores-a"
                                        style={{ height: '136px' }}
                                        multiple>
                                        <SelectGeral
                                            tableData="atores"
                                            valueTag="nome"
                                            fieldTag="ano_estreia"
                                        />
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} md="1" id="validationCustom01">
                                    <ButtonSwap titleTag="atores" />
                                </Form.Group>

                                <Form.Group as={Col} md="6">
                                    <Form.Label>Listagem de Elenco</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="6"
                                        style={{ resize: 'none', multiline: 'true' }}
                                        size="sm"
                                        id="atores"
                                        required
                                        value={atores}
                                        onChange={(e) => setAtores(e.target.value)}
                                        onFocus={(e) => setAtores(e.target.value)} />
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="roteiro" title="Roteiro">
                    <br></br>
                    <Card>
                        <Card.Header as="h5">Listagem de Roteiristas</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="5">
                                    <Form.Label>Roteiristas</Form.Label>
                                    <Form.Control
                                        as="select"
                                        size="sm"
                                        id="roteiristas-a"
                                        style={{ height: '136px' }}
                                        multiple>
                                        <SelectGeral
                                            tableData="roteiristas"
                                            valueTag="nome"
                                            fieldTag="ano_estreia"
                                        />
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} md="1" id="validationCustom01">
                                    <ButtonSwap titleTag="roteiristas" />
                                </Form.Group>

                                <Form.Group as={Col} md="6">
                                    <Form.Label>Listagem de Roteiristas</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="6"
                                        style={{ resize: 'none', multiline: 'true' }}
                                        size="sm"
                                        id="roteiristas"
                                        required
                                        value={roteiristas}
                                        onChange={(e) => setRoteiristas(e.target.value)}
                                        onFocus={(e) => setRoteiristas(e.target.value)} />
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="sinopse" title="Sinopse">
                    <br></br>
                    <Card>
                        <Card.Header as="h5">Sinopse</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="12">
                                    <Form.Label>Informe a Sinopse do {titleTag}</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="4"
                                        style={{ resize: 'none' }}
                                        size="sm"
                                        id="sinopse"
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
                    <br></br>
                    <Card>
                        <Card.Header as="h5">Listagem de Premiações</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="5">
                                    <Form.Label>Premiações</Form.Label>
                                    <Form.Control
                                        as="select"
                                        size="sm"
                                        id="premiacoes-a"
                                        style={{ height: '136px' }}
                                        multiple>
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

                                <Form.Group as={Col} md="6">
                                    <Form.Label>Listagem de Premiações</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="6"
                                        style={{ resize: 'none', multiline: 'true' }}
                                        size="sm"
                                        id="premiacoes"
                                        required
                                        value={premiacoes}
                                        onChange={(e) => setPremiacoes(e.target.value)}
                                        onFocus={(e) => setPremiacoes(e.target.value)} />
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="trailer" title="Trailer">
                    <br></br>
                    <Card>
                        <Card.Header as="h5">Trailer</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="12">
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
                                            id="trailer"
                                            value={trailer}
                                            onChange={(e) => setTrailer(e.target.value)}
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12">
                                    <Form.Label>Comentário sobre o Trailer</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="4"
                                        style={{ resize: 'none' }}
                                        size="sm"
                                        id="comentario_trailer"
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
                    <br></br>
                    <Card>
                        <Card.Header as="h5">Cartaz/Curiosidades</Card.Header>
                        <Card.Body>
                            <UploadFile handleChange={handleChange} />
                            <Form.Row>
                                <Form.Group as={Col} md="12">
                                    <Form.Label>Curiosidades sobre o {titleTag}</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="4"
                                        style={{ resize: 'none' }}
                                        size="sm"
                                        id="curiosidades"
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

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="Modal-Medio"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title><FontAwesomeIcon icon={faGlobeAmericas} />&nbsp;Dados do País de Origem</Modal.Title>
                </Modal.Header>
                <Modal.Body><FormPais tableData="pais_origem" titleTag="País" idForm="-1" dadosReg="" /></Modal.Body>
            </Modal>

        </>

    );
}

