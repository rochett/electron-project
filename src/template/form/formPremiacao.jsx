import React, { useState }  from 'react';
import { Col, Card, Form, Tabs, Tab } from 'react-bootstrap';
import SelectPais from './components/select/selectPais';
import SelectAno from './components/select/selectAno';
import ButtonsForm from './components/button/buttonsForm';

export default function FormPremiacao() {

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
                <Tab eventKey="ficha" title="Ficha Técnica">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Ficha Técnica</Card.Header>
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
                                <Form.Group as={Col} md="7" controlId="validationCustom01">
                                    <Form.Label>País de Origem</Form.Label>
                                    <Form.Control as="select" required size="sm">
                                        <SelectPais />                                             
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="5" controlId="validationCustom01">
                                    <Form.Label>Ano de Criação</Form.Label>
                                    <Form.Control as="select" required size="sm">
                                        <SelectAno />
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>     

                            <Form.Row> 
                                <Form.Group as={Col} md="12" controlId="validationCustom01">
                                    <Form.Label>Descrição</Form.Label>
                                    <Form.Control as="textarea" rows="4" style={{resize:'none', multiline:'true'}} size="sm" required />                                        
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

  