import React, { useState, useEffect } from 'react';
import { Col, Card, Form, Tabs, Tab } from 'react-bootstrap';
import ButtonsForm from '../../components/button/buttonsForm';
import firebase from "firebase/app";
import '../../components/uploader/css/bootstrap.min.css';
import '../../components/uploader/css/styleUpload.css';
import SaveData from '../../function/saveData';

export default function FormPais({ tableData }) {

    const [selectGeral, setSelectGeral] = useState([]);

    useEffect(() => {
        firebase.database().ref(`${tableData}/`).on('value', function (_selectGeral) {
            setSelectGeral(_selectGeral.val());
        });
    }, []);    

    const handleSubmit = event => {
        const dados = event.currentTarget;
        const _dados = {
            nome: dados.nome.value,
            sigla: dados.sigla.value
        };
        var dadosId = selectGeral && selectGeral[selectGeral.length - 1].id + 1;
        SaveData(tableData, _dados, dadosId);
        event.preventDefault();
        event.currentTarget.reset();
        var limpeza = document.getElementById("labelFile");
        limpeza.innerHTML = '';
    }

    return (

        <Form onSubmit={handleSubmit} encType="multipart/form-data">

            <Tabs defaultActiveKey="ficha" id="uncontrolled-tab-example">
                <Tab eventKey="ficha" title="Ficha Técnica">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">País</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="9" controlId="nome" controlName="nome">
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Nome"
                                        size="sm"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="sigla" controlName="sigla">
                                    <Form.Label>Sigla</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Sigla"
                                        size="sm"
                                    />
                                </Form.Group>
                            </Form.Row>                            
                        </Card.Body>
                    </Card>
                </Tab>                

            </Tabs>

            <br></br>

            <ButtonsForm />

        </Form>

    );
}

