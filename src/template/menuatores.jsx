import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import ModalAtor from './modal/modalAtor';
import ModalListaAtor from './modal/modalListaAtor';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
import { titulo_secao } from '../configapp';

function MenuAtores() {

  return (
    <>
      <Card bg="dark" text="white" border="info">
        <Card.Header>
          {titulo_secao.ator.titulo}<FontAwesomeIcon icon={faUser} className="Icon-Menu" />
        </Card.Header>
        <Card.Img variant="bottom" src={titulo_secao.ator.imagem} />
        <Card.Body>
          <Card.Title>Vincent Price</Card.Title>
          <Card.Text>
            Vincent Leonard Price Jr. foi um ator norte-americano. Nascido no Missouri,
            Price veio de uma família rica, cercada por m ambiente cultural...
                    </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem variant="dark">The Fly (1958)</ListGroupItem>
          <ListGroupItem variant="dark">Tales of Terror (1962)</ListGroupItem>
          <ListGroupItem variant="dark">Edward Scissorhands (1990)</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <div className="row">
            <div className="col-6">
              <ModalAtor />
            </div>
            <div className="col-6" align="right">
              <ModalListaAtor />
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted" align="center">{titulo_secao.ult_adic} 2 dias atrás</Card.Footer>
      </Card>
    </>
  );

}

export default MenuAtores;