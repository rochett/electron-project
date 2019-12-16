import React from 'react';
import { Col, Form } from 'react-bootstrap';
import SelectAno from '../../components/select/selectAno';
import SelectGeral from "../../components/select/selectGeral";
import DatePicker from '../../components/calendar/datepicker';

export default function FormGeneralFields(){   
    
    return (
        <>
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
                <DatePicker widthTag="2" />

                <Form.Group as={Col} md="3" controlId="validationCustom01">
                    <Form.Label>País de Origem</Form.Label>
                    <Form.Control as="select" required size="sm">
                        <SelectGeral tableData="pais_origem" valueTag="nome" />
                    </Form.Control>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="2" controlId="validationCustom01">
                    <Form.Label>Estréia</Form.Label>
                    <Form.Control as="select" required size="sm">
                        <SelectAno />
                    </Form.Control>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="2" controlId="validationCustom01">
                    <Form.Label>Aposentadoria</Form.Label>
                    <Form.Control as="select" required size="sm">
                        <SelectAno />
                    </Form.Control>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom01">
                    <Form.Label>Obra Máxima</Form.Label>
                    <Form.Control as="select" required size="sm">
                        <SelectGeral tableData="filmes" valueTag="titulo" />
                    </Form.Control>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
        </>
    )

}