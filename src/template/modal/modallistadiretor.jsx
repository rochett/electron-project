import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { faList, faUndoAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListaGeral from '../components/table/listaGeral';
import '../../template/styles.css';

export default function ModalListaDiretor() {

    const titles = [{ title: "Nome", field: "nome", search: false, iskey: true },
    { title: "Data de Nascimento", field: "data_nascimento", search: false, iskey: false },
    { title: "Filmes", field: "filmes", search: false, iskey: false },
    { title: "País de Origem", field: "pais_origem", search: true, iskey: false },
    { title: "Premiações", field: "premiacoes", search: true, iskey: false }];

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <FontAwesomeIcon icon={faList} />&nbsp;Lista
                </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="Modal-Largo"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title><FontAwesomeIcon icon={faVideo} />&nbsp;Listagem de Diretores</Modal.Title>
                </Modal.Header>
                <Modal.Body><ListaGeral tableData="diretores" titulos={titles} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        <FontAwesomeIcon icon={faUndoAlt} />&nbsp;Fechar
                        </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
