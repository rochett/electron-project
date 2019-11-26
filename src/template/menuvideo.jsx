import React  from 'react';
import { Card } from 'react-bootstrap';
import YoutubeVideo from './youtubevideo';

function MenuVideo() {    
    
        return (
            <>
                <Card bg="dark" text="white" style={{ width: '18rem' }}>
                    <Card.Header>Trailers</Card.Header>
                    <Card.Body>
                        <Card.Title>IT 2 - Trailer do cinema</Card.Title>
                        <Card.Text>
                        Trailer veiculado antes (e/ou) após sessões cinematográficas
                        antes de sua estréia oficial.                        
                        </Card.Text>          
                        <YoutubeVideo />                                      
                    </Card.Body>
                    <Card.Header>Curiosidades</Card.Header>
                    <Card.Body>                        
                        <Card.Text>
                        IT 2 é baseado no livro "IT", do autor norte-americano Stephen King.
                        Sua primeira versão cinematográfica foi produzida nos anos 90.                         
                        </Card.Text>                                                                                            
                    </Card.Body>
                </Card>
                <br />   
            </>
        );
           
}

export default MenuVideo;