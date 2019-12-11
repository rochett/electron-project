import React from 'react';
import { Col, Card, Form } from 'react-bootstrap';
import SelectGeral from '../select/selectGeral';
import ButtonSwap from '../button/buttonSwap';
import removeAccents from 'remover-acentos';

export default function MultiGeral({ titleTag, valueTag }) {

    return (

        <Card>
            <Card.Header as="h5">Listagem de {titleTag}</Card.Header>
            <Card.Body>
                <Form.Row>
                    <Form.Group as={Col} md="5" controlId="validationCustom01">
                        <Form.Label>{titleTag}</Form.Label>
                        <Form.Control as="select" size="sm" style={{ height: '136px' }} multiple>
                            <SelectGeral tableData={removeAccents(titleTag).toLowerCase()} valueTag={valueTag} />
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} md="1" controlId="validationCustom01">
                        <ButtonSwap />
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Listagem de {titleTag}</Form.Label>
                        <Form.Control as="textarea" rows="6" style={{ resize: 'none', multiline: 'true' }} size="sm" required />
                    </Form.Group>
                </Form.Row>
            </Card.Body>
        </Card>
    )

}                    