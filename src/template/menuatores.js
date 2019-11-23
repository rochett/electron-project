import React  from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import filme from '../image/bestmoviesofalltime.jpg';
import ModalAtor from './modal/modalator';
import ModalListaAtor from './modal/modallistaator';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Row, Col} from 'react-bootstrap';

function MenuAtores() {    
    
        return (
            <>
              <Card bg="dark" text="white" border="info" style={{ width: '18rem' }}>
              <Card.Header>
                <Row>
                  <Col xs={10}>Atores & Atrizes</Col>
                  <Col ><FontAwesomeIcon icon={faUser} /></Col>
                  </Row>
                </Card.Header>
                <Card.Img variant="bottom" src={filme} />                
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
                  <Card.Footer className="text-muted" align="center">Último Adicionado: 2 dias atrás</Card.Footer>
              </Card>   
            </>
        );
           
}

export default MenuAtores;