import React, { useState }  from 'react';
import { Col, Card, Form, Tabs, Tab } from 'react-bootstrap';
import SelectPais from './components/select/selectPais';
import SelectAno from './components/select/selectAno';
import SelectDiretor from './components/select/selectDiretor';
import SelectRoteirista from './components/select/selectRoteirista';
import SelectGenero from './components/select/selectGenero';
import SelectFilme from './components/select/selectFilme';
import SelectPremiacao from './components/select/selectPremiacao';
import ButtonsForm from './components/button/buttonsForm';
import ButtonSwap from './components/button/buttonSwap';

export default function FormDiretor() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    } 
        
    return (
        
        <Form noValidate validated={validated} onSubmit={handleSubmit}>            

            <Tabs defaultActiveKey="ficha" id="uncontrolled-tab-example">
                <Tab eventKey="ficha" title="Diretor">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Diretor</Card.Header>
                        <Card.Body> 
                            <Form.Row>
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control
                                    required
                                    type="text"
                                    placeholder="Título" 
                                    size="sm"                                          
                                    />                                        
                                </Form.Group>
                                 <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Título Original</Form.Label>
                                    <Form.Control
                                    required
                                    type="text"
                                    placeholder="Título Original"                                           
                                    size="sm"
                                    />                                        
                                </Form.Group>
                            </Form.Row> 

                            <Form.Row> 
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Direção</Form.Label>
                                    <Form.Control as="select" required size="sm">
                                        <SelectDiretor />
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>País de Origem</Form.Label>
                                    <Form.Control as="select" required size="sm">
                                        <SelectPais />
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="2" controlId="validationCustom01">
                                    <Form.Label>Lançamento</Form.Label>
                                    <Form.Control as="select" required size="sm">
                                        <SelectAno />
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>     

                            <Form.Row> 
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Roteiro</Form.Label>
                                    <Form.Control as="select" required size="sm">
                                        <SelectRoteirista />
                                    </Form.Control>
                                    <Form.Control.Feedback>De boa!</Form.Control.Feedback>
                                </Form.Group>                                    

                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Gênero</Form.Label>
                                    <Form.Control as="select" required size="sm">
                                        <SelectGenero />
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                    </Card>
                </Tab>                

                <Tab eventKey="filmes" title="Filmes">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Elenco</Card.Header>
                        <Card.Body> 
                            <Form.Row>
                                <Form.Group as={Col} md="5" controlId="validationCustom01">
                                    <Form.Label>Listagem de Filmes</Form.Label>
                                    <Form.Control as="select" size="sm" style={{height:'136px'}} multiple>
                                        <SelectFilme />
                                    </Form.Control>                                        
                                </Form.Group>
                            
                                <Form.Group as={Col} md="1" controlId="validationCustom01">
                                    <ButtonSwap />    
                                </Form.Group>                                    
                            
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Filmes do Diretor</Form.Label>
                                    <Form.Control as="textarea" rows="6" style={{resize:'none', multiline:'true'}} size="sm" required />                                        
                                </Form.Group>                                    
                            </Form.Row>
                        </Card.Body>
                    </Card>                           
                </Tab>

                <Tab eventKey="biografia" title="Biografia">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Dados Biográficos</Card.Header>
                        <Card.Body>                            
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationCustom01">                        
                                    <Form.Label>
                                        Informe a Biografia do Diretor
                                    </Form.Label>
                                    <Form.Control as="textarea" rows="4" style={{resize:'none'}} size="sm" required />
                                </Form.Group> 
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>                     
                            </Form.Row>             
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="premiacao" title="Premiações">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Elenco</Card.Header>
                        <Card.Body> 
                            <Form.Row>
                                <Form.Group as={Col} md="5" controlId="validationCustom01">
                                    <Form.Label>Premiaçãoes</Form.Label>
                                    <Form.Control as="select" size="sm" style={{height:'136px'}} multiple>
                                        <SelectPremiacao />
                                    </Form.Control>                                        
                                </Form.Group>
                            
                                <Form.Group as={Col} md="1" controlId="validationCustom01">
                                    <ButtonSwap />    
                                </Form.Group>                                    
                            
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Premiações do Filme</Form.Label>
                                    <Form.Control as="textarea" rows="6" style={{resize:'none', multiline:'true'}} size="sm" required />                                        
                                </Form.Group>                                      
                            </Form.Row>
                        </Card.Body>
                    </Card>                           
                </Tab>                
            </Tabs>            

            <br></br>

            <ButtonsForm />
                
        </Form>
        
    );
}

  