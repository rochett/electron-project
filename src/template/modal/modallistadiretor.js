import React, { useState }  from 'react';
import { Button, Modal } from 'react-bootstrap';
import { faList, faUndoAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ModalListaFilme() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
    
        return (
            <>
                <Button variant="primary" onClick={handleShow}>
                <FontAwesomeIcon icon={faList} />&nbsp;Lista
                </Button>                

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title><FontAwesomeIcon icon={faVideo} />&nbsp;Listagem de Diretores</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                        <FontAwesomeIcon icon={faUndoAlt} />&nbsp;Fechar
                        </Button>
                    </Modal.Footer>                    
                </Modal>               
            </>
        );
           
}

export default ModalListaFilme;