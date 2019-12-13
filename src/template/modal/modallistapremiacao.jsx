import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { faList, faUndoAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListaGeral from '../components/table/listaGeral';
import '../../template/styles.css';

export default function ModalListaPremiacao() {

    const titles = [{ title: "Título", field: "titulo", search: false, iskey: true },
    { title: "Título Original", field: "titulo_original", search: false, iskey: false },
    { title: "Ano de Criação", field: "ano_criacao", search: false, iskey: false },
    { title: "Ano de Encerramento", field: "ano_encerramento", search: false, iskey: false },
    { title: "Descrição", field: "descricao", search: true, iskey: false }];

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
                    <Modal.Title><FontAwesomeIcon icon={faVideo} />&nbsp;Listagem de Premiações</Modal.Title>
                </Modal.Header>
                <Modal.Body><ListaGeral tableData="premiacoes" titulos={titles} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        <FontAwesomeIcon icon={faUndoAlt} />&nbsp;Fechar
                        </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
