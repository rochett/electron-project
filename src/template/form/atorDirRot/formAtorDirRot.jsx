import React, { useState, useEffect } from 'react';
import { Col, Card, Form, Tabs, Tab, InputGroup, Modal, Button } from 'react-bootstrap';
import firebase from "firebase/app";
import '../../components/uploader/css/bootstrap.min.css';
import '../../components/uploader/css/styleUpload.css';
import SaveData from '../../function/saveData';
import UploadFile from '../../components/uploader/uploadFile';
import FormPais from '../../form/pais/formPais';
import '../../../template/styles.css';
import SelectGeral from "../../components/select/selectGeral";
import { faGlobeAmericas, faCheck, faSyncAlt, faCalendar, faPlus, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import swal from 'sweetalert';
import ButtonSwap from '../../components/button/buttonSwap';
import FormGenPre from '../../form/genPre/formGenPre';

export default function FormAtorDirRot({ tableData, titleTag, idForm, dadosReg }) {

    const [show, setShow] = useState(false);
    const [selectGeral, setSelectGeral] = useState([]);
    const [selectDadosGeral, setSelectDadosGeral] = useState([]);
    const [nome, setNome] = useState(dadosReg.nome ? dadosReg.nome : '');
    const [nome_original, setNomeOriginal] = useState(dadosReg.nome_original ? dadosReg.nome_original : '');
    const [biografia, setBiografia] = useState(dadosReg.biografia ? dadosReg.biografia : '');
    const [ano_estreia, setAnoEstreia] = useState(dadosReg.ano_estreia ? parseInt(dadosReg.ano_estreia) : '');
    const [ano_aposentadoria, setAnoAposentadoria] = useState(dadosReg.ano_aposentadoria ? parseInt(dadosReg.ano_aposentadoria) : '');
    const [data_nascimento, setDataNascimento] = useState(dadosReg.data_nascimento ? dadosReg.data_nascimento : '');
    const [pais_origem, setPaisOrigem] = useState(dadosReg.pais_origem ? dadosReg.pais_origem : '');
    const [premiacoes, setPremiacoes] = useState(dadosReg.premiacoes ? dadosReg.premiacoes : '');
    const [obra_maxima, setObraMaxima] = useState(dadosReg.obra_maxima ? dadosReg.obra_maxima : '');

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

    const [showPais, setShowPais] = useState(false);

    function handlePremiacaoShow() {
        setShow(true);
        setShowPais(false);
    }

    function handlePaisShow() {
        setShow(true);
        setShowPais(true);
    }

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
            var imagemBanco = dadosReg.foto;
            const _dados = {
                nome: nome,
                nome_original: nome_original,
                biografia: biografia,
                ano_estreia: ano_estreia,
                ano_aposentadoria: ano_aposentadoria,
                data_nascimento: data_nascimento,
                pais_origem: pais_origem,
                premiacoes: premiacoes,
                obra_maxima: obra_maxima,
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
        if (nome && nome_original && biografia && ano_estreia
            && data_nascimento && premiacoes && obra_maxima && biografia
            && pais_origem && document.getElementById("labelFile").innerHTML !== 'Nenhum Arquivo Selecionado') {
            return true;
        } else {
            return false;
        }
    }

    const handleClear = event => {
        setNome(dadosReg.nome ? dadosReg.nome : '');
        setNomeOriginal(dadosReg.nome_original ? dadosReg.nome_original : '');
        setBiografia(dadosReg.biografia ? dadosReg.biografia : '');
        setAnoEstreia(dadosReg.ano_estreia ? parseInt(dadosReg.ano_estreia) : '');
        setAnoAposentadoria(dadosReg.ano_aposentadoria ? parseInt(dadosReg.aposentadoria) : '');
        setDataNascimento(dadosReg.data_nascimento ? dadosReg.data_nascimento : '');
        setPaisOrigem(dadosReg.pais_origem ? dadosReg.pais_origem : '');
        setPremiacoes(dadosReg.premiacoes ? dadosReg.premiacoes : '');
        setObraMaxima(dadosReg.obra_maxima ? dadosReg.obra_maxima : '');
        document.getElementById("image_upload").value = '';
        document.getElementById("labelFile").innerHTML = dadosReg.nome_imagem ? dadosReg.nome_imagem : 'Nenhum Arquivo Selecionado';
    }

    return (

        <>
            <Tabs defaultActiveKey="ator" id="uncontrolled-tab-example">
                <Tab eventKey="ator" title="Ator/Atriz">
                    <br></br>
                    <Card>
                        <Card.Header as="h5">{titleTag}</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Nome"
                                        size="sm"
                                        id="nome"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Nome Original</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Nome Original"
                                        size="sm"
                                        id="nome_original"
                                        value={nome_original}
                                        onChange={(e) => setNomeOriginal(e.target.value)}
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} md="2">
                                    <Form.Label>Nascimento</Form.Label>
                                    <InputGroup className="mb-2" size="sm">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faCalendar} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            required
                                            type="date"
                                            placeholder="dd/mm/aaaa"
                                            size="sm"
                                            id="data_nascimento"
                                            value={data_nascimento}
                                            onChange={(e) => setDataNascimento(e.target.value)}
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} md="3">
                                    <Form.Label>País de Origem</Form.Label>
                                    <InputGroup className="mb-2" size="sm">
                                        <InputGroup.Prepend onClick={() => handlePaisShow()}>
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
                                <Form.Group as={Col} md="2">
                                    <Form.Label>Ano de Estréia</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="Ano de Estréia"
                                        size="sm"
                                        id="ano_estreia"
                                        min="0"
                                        max="9999"
                                        value={ano_estreia}
                                        onChange={(e) => setAnoEstreia(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="2">
                                    <Form.Label>Ano de Aposentadoria</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Aposentadoria"
                                        size="sm"
                                        id="ano_aposentadoria"
                                        min="0"
                                        max="9999"
                                        value={ano_aposentadoria}
                                        onChange={(e) => setAnoAposentadoria(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="3">
                                    <Form.Label>Obra Máxima</Form.Label>
                                    <Form.Control
                                        as="select"
                                        required size="sm"
                                        id="obra_maxima"
                                        value={obra_maxima}
                                        onChange={(e) => setObraMaxima(e.target.value)}
                                    >
                                        <option value=""></option>
                                        <SelectGeral tableData="filmes" valueTag="titulo" />
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="biografia" title="Biografia">
                    <br></br>
                    <Card>
                        <Card.Header as="h5">Biografia</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="12">
                                    <Form.Label>Informe a Biografia do(a) {titleTag}</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="4"
                                        style={{ resize: 'none' }}
                                        size="sm"
                                        id="biografia"
                                        required
                                        value={biografia}
                                        onChange={(e) => setBiografia(e.target.value)}
                                    />
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="premiacao" title="Premiações">
                    <br></br>
                    <Card>
                        <Card.Header as="h5">Listagem de Premiações
                        <Button type="button" variant="primary" size="sm" className="Button-New"
                                onClick={() => handlePremiacaoShow()} ><FontAwesomeIcon icon={faPlus} /></Button>
                        </Card.Header>
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

                                <Form.Group as={Col} md="1" id="validationCustom01">
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

                <Tab eventKey="foto" title="Foto">
                    <br></br>
                    <Card>
                        <Card.Header as="h5">Foto</Card.Header>
                        <Card.Body>
                            <UploadFile handleChange={handleChange} />
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
                dialogClassName={showPais === true ? 'Modal-Medio' : 'Modal-Largo'}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title><FontAwesomeIcon icon={showPais === true ? faGlobeAmericas : faVideo} />&nbsp;
                        {showPais === true ? 'Dados do País de Origem' : 'Dados da Premiação'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        showPais === true ? <FormPais tableData="pais_origem" titleTag="País" idForm="-1" dadosReg="" /> :
                            <FormGenPre tableData="premiacoes" titleTag="Premiação" idForm="-1" dadosReg="" />
                    }
                </Modal.Body>
            </Modal>

        </>

    );
}

