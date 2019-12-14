import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import ModalFormGeral from '../modal/modalFormGeral';
import ModalListaGeral from '../modal/modalListaGeral';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles.css';
import { titulo_secao } from '../../configapp';
import DateDiff from '../components/calendar/dates'

export default function MenuFilmes({lastMovieTag}) {

  const titles = [{ title: "Título", field: "titulo", search: false, iskey: true },
    { title: "Título Original", field: "titulo_original", search: true, iskey: false },
    { title: "Ano de Lançamento", field: "ano_lancamento", search: false, iskey: false },
    { title: "País de Origem", field: "pais_origem", search: true, iskey: false }];  
    
    var elenco = lastMovieTag && lastMovieTag.elenco;
    var resultado = elenco && elenco.split(", ", 2);

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
            {lastMovieTag && lastMovieTag.sinopse}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem variant="dark">{lastMovieTag && lastMovieTag.diretor}&nbsp;(Direção)</ListGroupItem>
          {
            resultado && resultado.map((text, i) => <ListGroupItem key={i} variant="dark">
            {text}</ListGroupItem>)          
          }
        </ListGroup>
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
          &nbsp;<DateDiff lastMovieTag={lastMovieTag} /> dias atrás</Card.Footer>
      </Card>
    </>
  );

}
