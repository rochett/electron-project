import React from 'react';
import { Card } from 'react-bootstrap';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalFormGeral from '../modal/modalFormGeral';
import ModalListaGeral from '../modal/modalListaGeral';
import '../styles.css';
import { titulo_secao } from '../../configapp';
import DateDiff from '../components/calendar/dates';
import CharLimit from '../components/characters/charLimit';
import ListMenuGeral from '../components/list/listMenu';

export default function MenuRoteiristas({lastMovieTag}) {

  const titles = [{ id: "Id", field: "id", search: false, iskey: false, hidden: true },
    { title: "Nome", field: "nome", search: false, iskey: true },
    { title: "Data de Nascimento", field: "data_nascimento", search: false, iskey: false },
    { title: "País de Origem", field: "pais_origem", search: false, iskey: false },
    { title: "Ano de Estréia", field: "ano_estreia", search: true, iskey: false },
    { title: "Premiações", field: "premiacoes", search: true, iskey: false }];

  return (
    <>
      <Card bg="dark" text="white" border="info">
        <Card.Header>
          {titulo_secao.roteirista.titulo}<FontAwesomeIcon icon={faVideo} className="Icon-Menu" />
        </Card.Header>
        <Card.Img variant="bottom" src={titulo_secao.roteirista.imagem} />
        <Card.Body>
          <Card.Title>{lastMovieTag && lastMovieTag.nome}</Card.Title>
          <Card.Text>
            <CharLimit lastMovieTag={lastMovieTag} limitTag="145" valueTag="biografia" />
          </Card.Text>
        </Card.Body>
        <ListMenuGeral tableData="filmes" valueTag="titulo" fieldTag="roteirista" filterTag={lastMovieTag && lastMovieTag.nome} regLimitTag="3" />
        <Card.Body>
          <div className="row" width="100%">
            <div className="col-6">
              <ModalFormGeral titleTag="Roteirista" formTag="FormRoteirista" />
            </div>
            <div className="col-6" align="right">
              <ModalListaGeral tableData="Roteiristas" titles={titles} />
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted" align="center">{titulo_secao.ult_adic} 
          &nbsp;<DateDiff lastMovieTag={lastMovieTag} /> dias atrás</Card.Footer>
      </Card>
    </>
  );

}
