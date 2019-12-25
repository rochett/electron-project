import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { faPlus, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormPremiacao from '../form/premiacao/formPremiacao';
import FormFilme from '../form/filme/formFilme';
import FormGenero from '../form/genero/formGenero';
import FormAtor from '../form/ator/formAtor';
import FormDiretor from '../form/diretor/formDiretor';
import FormRoteirista from '../form/roteirista/formRoteirista';
import '../../template/styles.css';

export default function ModalFormGeral({titleTag, formTag}) {

    const [show, setShow] = useState(false);

    function renderSwitch({formTag}) {
        switch(formTag) {
            case 'FormPremiacao':
                return <FormPremiacao tableData="premiacoes" />;
            case 'FormFilme':
                return <FormFilme tableData="filmes" />;  
            case 'FormGenero':
                return <FormGenero tableData="generos" />; 
            case 'FormAtor':
                return <FormAtor tableData="atores" />;
            case 'FormDiretor':
                return <FormDiretor tableData="diretores" />;  
            case 'FormRoteirista':
                return <FormRoteirista tableData="roteiristas" />;        
            default:
                return <FormPremiacao tableData="premiacoes" />;
        }
    }

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
                    <Modal.Title><FontAwesomeIcon icon={faVideo} />&nbsp;Dados do(a) {titleTag}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{renderSwitch({formTag})}</Modal.Body>
            </Modal>
        </>
    );

}
