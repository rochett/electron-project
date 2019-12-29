import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { faPlus, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormFilme from '../form/filme/formFilme';
import FormGenPre from '../form/genPre/formGenPre';
import FormAtorDirRot from '../form/atorDirRot/formAtorDirRot';
import '../../template/styles.css';

export default function ModalFormGeral({titleTag, formTag}) {

    const [show, setShow] = useState(false);

    function renderSwitch({formTag}) {
        switch(formTag) {
            case 'FormPremiacao':
                return <FormGenPre tableData="premiacoes" titleTag="Premiação" />;
            case 'FormFilme':
                return <FormFilme tableData="filmes" titleTag="Filme" />;  
            case 'FormGenero':
                return <FormGenPre tableData="generos" titleTag="Gênero" />; 
            case 'FormAtor':
                return <FormAtorDirRot tableData="atores" titleTag="Ator" />;
            case 'FormDiretor':
                return <FormAtorDirRot tableData="diretores" titleTag="Diretor" />;  
            case 'FormRoteirista':
                return <FormAtorDirRot tableData="roteiristas" titleTag="Roteirista" />;         
            default:
                return <FormGenPre tableData="premiacoes" titleTag="Premiação" />;
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
