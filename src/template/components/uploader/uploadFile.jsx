import React from 'react';
import { Col, Form } from 'react-bootstrap';

export default function UploadFile({handleChange}){   
    
    return (
        <>
            <Form.Row>
                <Form.Group as={Col} md="12">                                                                   
                    <div class="custom-file mb-3">
                        <input type="file" className="custom-file-inputA button" id="imageUpload" name="imageUpload" onChange={handleChange} required></input>
                        <label className="custom-file-label" for="customFile" id="labelFile">Nenhum Arquivo Selecionado</label>
                    </div>
                </Form.Group>
            </Form.Row>
        </>
    )

}