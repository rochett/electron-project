import React  from 'react';
import { Card } from 'react-bootstrap';

function FooterApp() {    
    
        return (
            <>
                <Card bg="dark" text="white" style={{ width: '100%' }}>                
                    <Card.Body>
                        <Card.Title>Super Filmes 1.0</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
            </>
        );
           
}

export default FooterApp;