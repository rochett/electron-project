import React, { useState } from 'react';
import { Col, Card, Form, InputGroup, Modal } from 'react-bootstrap';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SelectAno from '../../components/select/selectAno';
import SelectGeral from "../../components/select/selectGeral";
import DatePicker from '../../components/calendar/datepicker';
import FormPais from '../../form/pais/formPais';
import '../../../template/styles.css';

export default function FormGeneralFields({ titleTag }) {

    const [show, setShow] = useState(false);

    return (

        <Card>
            <Card.Header as="h5">{titleTag}</Card.Header>
            <Card.Body>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="nome" controlName="nome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nome"
                            size="sm"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="nome_original" controlName="nome_original">
                        <Form.Label>Nome Original</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nome Original"
                            size="sm"
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <DatePicker widthTag="2" />
                    <Form.Group as={Col} md="3" controlId="pais_origem" controlName="pais_origem">
                        <Form.Label>País de Origem</Form.Label>
                        <InputGroup className="mb-2" size="sm">
                            <InputGroup.Prepend onClick={() => setShow(true)}>
                                <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faGlobeAmericas} /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control as="select" required size="sm">
                                <SelectGeral tableData="pais_origem" valueTag="nome" />
                            </Form.Control>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="ano_estreia" controlName="ano_estreia">
                        <Form.Label>Estréia</Form.Label>
                        <Form.Control as="select" required size="sm">
                            <SelectAno />
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="ano_aposentadoria" controlName="ano_aposentadoria">
                        <Form.Label>Aposentadoria</Form.Label>
                        <Form.Control as="select" required size="sm">
                            <option value="Em Atividade">Em Atividade</option>
                            <SelectAno />
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="obra_maxima" controlName="obra_maxima">
                        <Form.Label>Obra Máxima</Form.Label>
                        <Form.Control as="select" required size="sm">
                            <SelectGeral tableData="filmes" valueTag="titulo" />
                        </Form.Control>
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

    )

}