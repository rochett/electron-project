import React, { useState }  from 'react';
import { Button, Modal } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ModalAtor() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
        return (
            <>
                <Button variant="primary" onClick={handleShow}>
                <FontAwesomeIcon icon={faPlus} />&nbsp;Novo
                </Button>                

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Dados do Ator/Atriz</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleClose} >
                        Salvar
                    </Button>
                    </Modal.Footer>                    
                </Modal>               
            </>
        );
           
}

export default ModalAtor;