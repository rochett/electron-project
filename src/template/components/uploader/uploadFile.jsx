import React from 'react';
import { Col, Form } from 'react-bootstrap';

export default function UploadFile({handleChange}){   
    
    return (
        <>
            <Form.Row>
                <Form.Group as={Col} md="12">                                                                   
                    <div className="custom-file mb-3">
                        <input type="file" className="custom-file-inputA button" id="image_upload" onChange={handleChange} required></input>
                        <label className="custom-file-label" htmlFor="customFile" id="labelFile">Nenhum Arquivo Selecionado</label>
                    </div>
                </Form.Group>
            </Form.Row>
        </>
    )

}