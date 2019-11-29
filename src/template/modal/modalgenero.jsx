import React, { useState }  from 'react';
import { Button, Modal } from 'react-bootstrap';
import { faPlus, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormGenero from '../form/formgenero';
import { titulo_secao } from '../../configapp';

function ModalFilme() {
    
    const [show, setShow] = useState(false);    
    
        return (
            <>
                <Button variant="primary" onClick={() => setShow(true)}>
                <FontAwesomeIcon icon={faPlus} />&nbsp;Novo
                </Button>                

                <Modal 
                 show={show}
                 onHide={() => setShow(false)}
                 dialogClassName="modal-90w"
                 aria-labelledby="example-custom-modal-styling-title"
                 size="lg">
                    <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title"><FontAwesomeIcon icon={faVideo} />&nbsp;Dados do {titulo_secao.genero.form_titulo}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><FormGenero /></Modal.Body>                                     
                </Modal>               
            </>
        );
           
}

export default ModalFilme;