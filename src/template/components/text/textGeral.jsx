import React from 'react';
import { Col, Card, Form } from 'react-bootstrap';

export default function TextGeral({ titleTag }) {

    return (

        <Card>
            <Card.Header as="h5">Biografia</Card.Header>
            <Card.Body>
                <Form.Row>
                    <Form.Group as={Col} md="12" controlId="biografia">
                        <Form.Label>
                            Informe a Biografia do { titleTag }
                        </Form.Label>
                        <Form.Control as="textarea" rows="4" style={{ resize: 'none' }} size="sm" required />
                    </Form.Group>                                
                </Form.Row>
            </Card.Body>
        </Card>

    )

}                    