import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import ModalFormGeral from '../modal/modalFormGeral';
import ModalListaGeral from '../modal/modalListaGeral';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles.css';
import { titulo_secao } from '../../configapp';
import DateDiff from '../components/calendar/dates'

export default function MenuDiretores({lastMovieTag}) {

  const titles = [{ title: "Nome", field: "nome", search: false, iskey: true },
    { title: "Data de Nascimento", field: "data_nascimento", search: false, iskey: false },
    { title: "Filmes", field: "filmes", search: false, iskey: false },
    { title: "País de Origem", field: "pais_origem", search: true, iskey: false },
    { title: "Premiações", field: "premiacoes", search: true, iskey: false }];

  return (
    <>
      <Card bg="dark" text="white" border="info">
        <Card.Header>
          {titulo_secao.diretor.titulo}<FontAwesomeIcon icon={faVideo} className="Icon-Menu" />
        </Card.Header>
        <Card.Img variant="bottom" src={titulo_secao.diretor.imagem} />
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
              <ModalFormGeral titleTag="Diretor" formTag="FormDiretor" />
            </div>
            <div className="col-6" align="right">
              <ModalListaGeral tableData="Diretores" titles={titles} />
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted" align="center">{titulo_secao.ult_adic} 
          &nbsp;<DateDiff lastMovieTag={lastMovieTag} /> dias atrás</Card.Footer>
      </Card>
    </>
  );

}
