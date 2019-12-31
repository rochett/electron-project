import React, { useState, useEffect } from 'react';
import { Col, Card, Form, Tabs, Tab, InputGroup, Modal, Button } from 'react-bootstrap';
import firebase from "firebase/app";
import '../../components/uploader/css/bootstrap.min.css';
import '../../components/uploader/css/styleUpload.css';
import SaveData from '../../function/saveData';
import { faCheck, faSyncAlt, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import swal from 'sweetalert';
import SelectGeral from "../../components/select/selectGeral";
import FormPais from '../pais/formPais';
import '../../../template/styles.css';

export default function FormGenPre({ tableData, titleTag, idForm, dadosReg }) {

    const [show, setShow] = useState(false);
    const [selectGeral, setSelectGeral] = useState([]);
    const [titulo, setTitulo] = useState(dadosReg.titulo ? dadosReg.titulo : '');
    const [titulo_original, setTituloOriginal] = useState(dadosReg.titulo_original ? dadosReg.titulo_original : '');
    const [pais_origem, setPaisOrigem] = useState(dadosReg.pais_origem ? dadosReg.pais_origem : '');
    const [obra_maxima, setObraMaxima] = useState(dadosReg.obra_maxima ? dadosReg.obra_maxima : '');
    const [ano_criacao, setAnoCriacao] = useState(dadosReg.ano_criacao ? parseInt(dadosReg.ano_criacao) : '');
    const [descricao, setDescricao] = useState(dadosReg.descricao ? dadosReg.descricao : '');

    useEffect(() => {
        firebase.database().ref(`${tableData}/`).on('value', function (_selectGeral) {
            setSelectGeral(_selectGeral.val());
        });
    }, []);

    const handleClick = event => {
        var validacao = handleValidate();
        if (validacao === true) {
            const _dados = {
                titulo: titulo,
                titulo_original: titulo_original,
                pais_origem: pais_origem,
                obra_maxima: obra_maxima,
                ano_criacao: ano_criacao,
                descricao: descricao
            };
            var dadosId = 0;
            if (idForm < 0) {
                dadosId = selectGeral && selectGeral[selectGeral.length - 1].id + 1;
            } else {
                dadosId = idForm;
            }
            SaveData(tableData, _dados, dadosId);
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
        if (titulo && titulo_original && descricao && ano_criacao && pais_origem && obra_maxima) {
            return true;
        } else {
            return false;
        }
    }

    const handleClear = event => {
        setTitulo('');
        setTituloOriginal('');
        setPaisOrigem('');
        setObraMaxima('');
        setAnoCriacao('');
        setDescricao('');

    }

    return (
        <>

            <Tabs defaultActiveKey="ficha" id="uncontrolled-tab-example">
                <Tab eventKey="ficha" title="Ficha Técnica">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">{titleTag}</Card.Header>
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
                                <Form.Group as={Col} md="5" controlId="pais_origem">
                                    <Form.Label>País de Origem</Form.Label>
                                    <InputGroup className="mb-2" size="sm">
                                        <InputGroup.Prepend onClick={() => setShow(true)}>
                                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faGlobeAmericas} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            as="select"
                                            required
                                            size="sm"
                                            value={pais_origem}
                                            onChange={(e) => setPaisOrigem(e.target.value)}
                                        >
                                            <option value=""></option>
                                            <SelectGeral tableData="pais_origem" valueTag="nome" />
                                        </Form.Control>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} md="5" controlId="obra_maxima">
                                    <Form.Label>Obra Inaugural</Form.Label>
                                    <Form.Control
                                        as="select"
                                        required size="sm"
                                        value={obra_maxima}
                                        onChange={(e) => setObraMaxima(e.target.value)}
                                    >
                                        <option value=""></option>
                                        <SelectGeral tableData="filmes" valueTag="titulo" />
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="ano_criacao">
                                    <Form.Label>Ano de Criação</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="Ano de Criação"
                                        size="sm"
                                        min="0"
                                        max="9999"
                                        value={ano_criacao}
                                        onChange={(e) => setAnoCriacao(e.target.value)}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="descricao">
                                    <Form.Label>Descrição</Form.Label>
                                    <Form.Control as="textarea" rows="4"
                                        style={{ resize: 'none', multiline: 'true' }}
                                        size="sm" required
                                        value={descricao}
                                        onChange={(e) => setDescricao(e.target.value)}
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

