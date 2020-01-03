import React from 'react';
import { Card } from 'react-bootstrap';
import ModalFormGeral from '../modal/modalFormGeral';
import ModalListaGeral from '../modal/modalListaGeral';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles.css';
import { titulo_secao } from '../../configapp';
import DateDiff from '../components/calendar/dates';
import CharLimit from '../components/characters/charLimit';
import ListMenuGeral from '../components/list/listMenu';

export default function MenuFilmes({ lastMovieTag }) {

  const titles = [{ id: "Id", field: "id", search: false, iskey: false, hidden: true },
  { title: "Título", field: "titulo", search: false, iskey: true },
  { title: "Título Original", field: "titulo_original", search: true, iskey: false },
  { title: "Ano de Lançamento", field: "ano_lancamento", search: false, iskey: false },
  { title: "País de Origem", field: "pais_origem", search: true, iskey: false }];

  return (
    <>
      <Card bg="dark" text="white" border="info">
        <Card.Header>
          {titulo_secao.filme.titulo}<FontAwesomeIcon icon={faVideo} className="Icon-Menu" />
        </Card.Header>
        <Card.Img variant="bottom" src={titulo_secao.filme.imagem} />
        <Card.Body>
          <Card.Title>{lastMovieTag && lastMovieTag.titulo}</Card.Title>
          <Card.Text>
            <CharLimit lastMovieTag={lastMovieTag} limitTag="140" valueTag="sinopse" />
          </Card.Text>
        </Card.Body>
        <ListMenuGeral lastMovieTag={lastMovieTag} valueTag="elenco" regTag="diretor" regLimitTag="2" />
        <Card.Body>
          <div className="row" width="100%">
            <div className="col-6">
              <ModalFormGeral titleTag="Filme" formTag="FormFilme" />
            </div>
            <div className="col-6" align="right">
              <ModalListaGeral tableData="Filmes" titles={titles} />
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted" align="center">{titulo_secao.ult_adic}
          &nbsp;<DateDiff lastMovieTag={lastMovieTag} /></Card.Footer>
      </Card>
    </>
  );

}
