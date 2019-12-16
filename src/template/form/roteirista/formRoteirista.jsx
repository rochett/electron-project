import React, { useState } from 'react';
import { Col, Card, Form, Tabs, Tab } from 'react-bootstrap';
import FileUploadDemo from '../../components/uploader/upload-file';
import ButtonsForm from '../../components/button/buttonsForm';
import MultiGeral from '../../components/multilist/multilistGeral';
import FormGeneralFields from '../../components/formgeral/formGeneralFields';

export default function FormRoteirista() {
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

            <Tabs defaultActiveKey="roteirista" id="uncontrolled-tab-example">
                <Tab eventKey="roteirista" title="Roteirista">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Roteirista</Card.Header>
                        <Card.Body>
                            <FormGeneralFields />
                        </Card.Body>
                    </Card>
                </Tab>
               
                <Tab eventKey="biografia" title="Biografia">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Biografia</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationCustom01">
                                    <Form.Label>
                                        Informe a Biografia do Roteirista
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

