import React  from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import imagem from '../image/bestmoviesofalltime.jpg';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Row, Col} from 'react-bootstrap';
import ModalRoteirista from './modal/modalroteirista';
import ModalListaRoteirista from './modal/modallistaroteirista';

function MenuRoteiristas() {    
    
        return (
            <>
              <Card bg="dark" text="white" border="info" style={{ width: '18rem' }}>
              <Card.Header>
                Roteiristas<FontAwesomeIcon icon={faVideo} style={{float:'right', marginTop:'5'}} />
                </Card.Header>
                <Card.Img variant="bottom" src={imagem} />                
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
                        <ModalRoteirista />
                      </div>
                      <div className="col-6" align="right">
                        <ModalListaRoteirista />
                      </div>
                    </div>
                  </Card.Body>
                  <Card.Footer className="text-muted" align="center">Último Adicionado: 2 dias atrás</Card.Footer>
              </Card>   
            </>
        );
           
}

export default MenuRoteiristas;