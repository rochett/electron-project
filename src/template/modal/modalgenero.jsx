import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { faPlus, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormGenero from '../form/genero/formGenero';
import { titulo_secao } from '../../configapp';
import '../../template/styles.css';

export default function ModalGenero() {

    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}>
                <FontAwesomeIcon icon={faPlus} />&nbsp;Novo
                </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="Modal-Largo"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title"><FontAwesomeIcon icon={faVideo} />&nbsp;Dados do {titulo_secao.genero.form_titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body><FormGenero /></Modal.Body>
            </Modal>
        </>
    );

}
