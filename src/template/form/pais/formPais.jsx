import React, { useState, useEffect } from 'react';
import { Col, Card, Form, Tabs, Tab } from 'react-bootstrap';
import firebase from "firebase/app";
import '../../components/uploader/css/bootstrap.min.css';
import '../../components/uploader/css/styleUpload.css';
import SaveData from '../../function/saveData';
import { faCheck, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';

export default function FormPais({ tableData }) {

    const [selectGeral, setSelectGeral] = useState([]);
    const [nome_pais, setNomePais] = useState('');
    const [sigla, setSigla] = useState('');

    useEffect(() => {
        firebase.database().ref(`${tableData}/`).on('value', function (_selectGeral) {
            setSelectGeral(_selectGeral.val());
        });
    }, []);

    const handleClick = event => {
        var validacao = handleValidate();
        if (validacao === true) {        
        const _dados = {
            nome: nome_pais,
            sigla: sigla
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
        if (nome_pais && sigla) {
            return true;
        } else {
            return false;
        }
    }    

    const handleClear = event => {
        setNomePais('');
        setSigla('');
    }

    return (
        <>
            <Tabs defaultActiveKey="ficha" id="uncontrolled-tab-example">
                <Tab eventKey="ficha" title="Ficha Técnica">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">País</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="9" controlId="nome_pais" controlName="nome_pais">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Nome"
                                        size="sm"
                                        value={nome_pais}
                                        onChange={(e) => setNomePais(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="sigla" controlName="sigla">
                                    <Form.Label>Sigla</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Sigla"
                                        size="sm"
                                        value={sigla}
                                        onChange={(e) => setSigla(e.target.value)}
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

