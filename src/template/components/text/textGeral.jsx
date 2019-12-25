import React from 'react';
import { Col, Form } from 'react-bootstrap';

export default function TextGeral({ titleTag, fieldTag }) {

    return (        
        <Form.Row>
            <Form.Group as={Col} md="12" controlId={ fieldTag }>
                <Form.Label>
                   { titleTag }
                </Form.Label>
                <Form.Control as="textarea" rows="4" style={{ resize: 'none' }} size="sm" required />
            </Form.Group>                                
        </Form.Row>
    )

}                    