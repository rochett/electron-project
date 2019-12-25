import React from 'react';
import { Col, Card, Form } from 'react-bootstrap';
import SelectAno from '../../components/select/selectAno';
import SelectGeral from "../../components/select/selectGeral";

export default function FormGeneral(){   
    
    return (
        
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
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="titulo_original">
                        <Form.Label>Título Original</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Título Original"
                            size="sm"
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="pais_origem">
                        <Form.Label>País de Origem</Form.Label>
                        <Form.Control as="select" required size="sm">
                            <SelectGeral tableData="pais_origem" valueTag="nome" />
                        </Form.Control>                                    
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="ano_criacao">
                        <Form.Label>Ano de Criação</Form.Label>
                        <Form.Control as="select" required size="sm">
                            <SelectAno />
                        </Form.Control>                                    
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="obra_maxima">
                        <Form.Label>Obra Máxima</Form.Label>
                        <Form.Control as="select" required size="sm">
                            <SelectGeral tableData="filmes" valueTag="titulo" />
                        </Form.Control>                                    
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="12" controlId="descricao">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control as="textarea" rows="4" style={{ resize: 'none', multiline: 'true' }} size="sm" required />
                    </Form.Group>
                </Form.Row>
            </Card.Body>
        </Card>
        
    )

}