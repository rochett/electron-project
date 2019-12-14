import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalFormGeral from '../modal/modalFormGeral';
import ModalListaGeral from '../modal/modalListaGeral';
import '../styles.css';
import { titulo_secao } from '../../configapp';
import DateDiff from '../components/calendar/dates'

export default function MenuGeneros({lastMovieTag}) {

  const titles = [{ title: "Título", field: "titulo", search: false, iskey: true },
  { title: "Título Original", field: "titulo_original", search: false, iskey: false },
  { title: "Ano de Criação", field: "ano_criacao", search: false, iskey: false },
  { title: "Descrição", field: "descricao", search: true, iskey: false }];

  return (
    <>
      <Card bg="dark" text="white" border="info">
        <Card.Header>
          {titulo_secao.genero.titulo}<FontAwesomeIcon icon={faVideo} className="Icon-Menu" />
        </Card.Header>
        <Card.Img variant="bottom" src={titulo_secao.genero.imagem} />
        <Card.Body>
          <Card.Title>IT 2</Card.Title>
          <Card.Text>
            Vinte e sete anos depois dos eventos que chocaram os adolescentes que faziam
            parte do Clube dos Perdedores, os amigos realizam uma reunião...
                    </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem variant="dark">Andy Muschietti (Direção)</ListGroupItem>
          <ListGroupItem variant="dark">James McAvoy</ListGroupItem>
          <ListGroupItem variant="dark">Jessica Chastain</ListGroupItem>
        </ListGroup>
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
