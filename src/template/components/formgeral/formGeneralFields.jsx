import React from 'react';
import { Col, Card, Form } from 'react-bootstrap';
import SelectAno from '../../components/select/selectAno';
import SelectGeral from "../../components/select/selectGeral";
import DatePicker from '../../components/calendar/datepicker';

export default function FormGeneralFields({ titleTag }){   
    
    return (
        
        <Card>
            <Card.Header as="h5">{ titleTag }</Card.Header>
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
                        <Form.Control as="select" required size="sm">
                            <SelectGeral tableData="pais_origem" valueTag="nome" />
                        </Form.Control>                    
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
        </Card>
        
    )

}