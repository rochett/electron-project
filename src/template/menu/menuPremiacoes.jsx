import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import { faPlus, faList, faVideo, faMedal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles.css';
import { titulo_secao } from '../../configapp';
import DateDiff from '../components/calendar/dates';
import CharLimit from '../components/characters/charLimit';
import ListMenuGeral from '../components/list/listMenu';
import ListaGeral from '../components/table/listaGeral';
import removeAccents from 'remover-acentos';
import FormGenPre from '../form/genPre/formGenPre';

export default function MenuPremiacoes({ lastMovieTag }) {

  const [show, setShow] = useState(false);
  const [showList, setShowList] = useState(false);

  function handleNewShow() {
    setShow(true);
    setShowList(false);
  }

  function handleListShow() {
    setShow(true);
    setShowList(true);
  }

  const titles = [{ id: "Id", field: "id", search: false, iskey: false, hidden: true },
  { title: "Título", field: "titulo", search: true, iskey: true },
  { title: "Título Original", field: "titulo_original", search: false, iskey: false },
  { title: "Ano de Criação", field: "ano_criacao", search: false, iskey: false },
  { title: "Obra Inaugural", field: "obra_maxima", search: false, iskey: false },
  { title: "Descrição", field: "descricao", search: true, iskey: false }];

  const tableData = 'Premiações';

  return (
    <>
      <Card bg="dark" text="white" border="info">
        <Card.Header>
          {titulo_secao.premiacao.titulo}<FontAwesomeIcon icon={faMedal} className="Icon-Menu" />
        </Card.Header>
        <Card.Img variant="bottom" src={titulo_secao.premiacao.imagem} />
        <Card.Body>
          <Card.Title>{lastMovieTag && lastMovieTag.titulo}</Card.Title>
          <Card.Text>
            <CharLimit lastMovieTag={lastMovieTag} limitTag="140" valueTag="descricao" />
          </Card.Text>
        </Card.Body>
        <ListMenuGeral tableData="filmes" valueTag="titulo" fieldTag="premiacoes" filterTag={lastMovieTag && lastMovieTag.titulo} regLimitTag="3" />
        <Card.Body>
          <div className="row">
            <div className="col-6">
              <Button variant="primary" onClick={() => handleNewShow()}>
                <FontAwesomeIcon icon={faPlus} />&nbsp;Novo
              </Button>
            </div>
            <div className="col-6" align="right">
              <Button variant="primary" onClick={() => handleListShow()}>
                <FontAwesomeIcon icon={faList} />&nbsp;Lista
              </Button>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted" align="center">{titulo_secao.ult_adic}
          &nbsp;<DateDiff lastMovieTag={lastMovieTag} /></Card.Footer>
      </Card>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="Modal-Largo"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faVideo} />&nbsp;
              {showList === true ? 'Listagem' : 'Cadastro'} de {tableData}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            showList === true ? <ListaGeral tableData={removeAccents(tableData).toLowerCase()} titulos={titles} /> :
              <FormGenPre tableData={removeAccents(tableData).toLowerCase()} titleTag="Premiação" idForm="-1" dadosReg="" />
          }
        </Modal.Body>
      </Modal>

    </>
  );

}
