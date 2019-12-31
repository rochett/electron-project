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

export default function MenuGeneros({ lastMovieTag }) {

  const titles = [{ id: "Id", field: "id", search: false, iskey: false, hidden: true },
  { title: "Título", field: "titulo", search: false, iskey: true },
  { title: "Título Original", field: "titulo_original", search: false, iskey: false },
  { title: "Ano de Criação", field: "ano_criacao", search: false, iskey: false },
  { title: "Obra Inaugural", field: "obra_maxima", search: false, iskey: false },
  { title: "Descrição", field: "descricao", search: true, iskey: false }];

  return (
    <>
      <Card bg="dark" text="white" border="info">
        <Card.Header>
          {titulo_secao.genero.titulo}<FontAwesomeIcon icon={faVideo} className="Icon-Menu" />
        </Card.Header>
        <Card.Img variant="bottom" src={titulo_secao.genero.imagem} />
        <Card.Body>
          <Card.Title>{lastMovieTag && lastMovieTag.titulo}</Card.Title>
          <Card.Text>
            <CharLimit lastMovieTag={lastMovieTag} limitTag="140" valueTag="descricao" />
          </Card.Text>
        </Card.Body>
        <ListMenuGeral tableData="filmes" valueTag="titulo" fieldTag="genero" filterTag={lastMovieTag && lastMovieTag.titulo} regLimitTag="3" />
        <Card.Body>
          <div className="row" width="100%">
            <div className="col-6">
              <ModalFormGeral titleTag="Gênero" formTag="FormGenero" />
            </div>
            <div className="col-6" align="right">
              <ModalListaGeral tableData="Gêneros" titles={titles} />
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted" align="center">{titulo_secao.ult_adic}
          &nbsp;<DateDiff lastMovieTag={lastMovieTag} /> dias atrás</Card.Footer>
      </Card>
    </>
  );

}
