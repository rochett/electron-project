import React from 'react';
import { Col, Form, InputGroup } from 'react-bootstrap';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DatePicker({widthTag}){   
    
    return (
        <>
            <Form.Group as={Col} md={widthTag} controlId="validationCustom01">
                <Form.Label>Nascimento</Form.Label>
                <InputGroup className="mb-2" size="sm">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faCalendar} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        required
                        type="date"
                        placeholder="dd/mm/aaaa"
                        size="sm"
                    />
                </InputGroup>                                    
            </Form.Group>
        </>
    )

}