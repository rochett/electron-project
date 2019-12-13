import React, { useState } from 'react';
import { Col, Card, Form, Tabs, Tab } from 'react-bootstrap';
import FileUploadDemo from '../../components/uploader/upload-file';
import SelectAno from '../../components/select/selectAno';
import SelectGeral from "../../components/select/selectGeral";
import MultiGeral from '../../components/multilist/multilistGeral';
import ButtonsForm from '../../components/button/buttonsForm';

export default function FormAtor() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }

    return (

        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Tabs defaultActiveKey="ator" id="uncontrolled-tab-example">
                <Tab eventKey="ator" title="Ator/Atriz">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Ator/Atriz</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Título"
                                        size="sm"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Nome Original</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Título Original"
                                        size="sm"
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} md="3" controlId="validationCustom01">
                                    <Form.Label>Nascimento</Form.Label>
                                    <Form.Control as="select" required size="sm">
                                        <SelectAno />
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="3" controlId="validationCustom01">
                                    <Form.Label>País de Origem</Form.Label>
                                    <Form.Control as="select" required size="sm">
                                        <SelectGeral tableData="pais_origem" valueTag="nome" />
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="3" controlId="validationCustom01">
                                    <Form.Label>Estréia</Form.Label>
                                    <Form.Control as="select" required size="sm">
                                        <SelectAno />
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="3" controlId="validationCustom01">
                                    <Form.Label>Aposentadoria</Form.Label>
                                    <Form.Control as="select" required size="sm">
                                        <SelectAno />
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="filmes" title="Filmes">
                    <hr></hr>
                    <MultiGeral titleTag="Filmes" valueTag="titulo" />
                </Tab>

                <Tab eventKey="biografia" title="Biografia">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Biografia</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationCustom01">
                                    <Form.Label>
                                        Informe a Biografia do Ator/Atriz
                                    </Form.Label>
                                    <Form.Control as="textarea" rows="4" style={{ resize: 'none' }} size="sm" required />
                                </Form.Group>
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </Form.Row>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="premiacao" title="Premiações">
                    <hr></hr>
                    <MultiGeral titleTag="Premiações" valueTag="titulo" />
                </Tab>

                <Tab eventKey="foto" title="Foto">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Foto</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationCustom01">
                                    <FileUploadDemo />
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

