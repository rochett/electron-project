import React  from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function FooterApp() {    
    
        return (
            <>
                <Jumbotron fluid style={{backgroundColor:'#343a40', color:'white'}}>
                    <Container style={{marginLeft:0}}>
                        <h1>Super Cinema 1.0</h1>
                        <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                        </p>
                    </Container>
                </Jumbotron>               
            </>
        );
           
}

export default FooterApp;