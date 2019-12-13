import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import '../../styles.css';
import { titulo_secao } from '../../../configapp';

function FooterApp() {

    return (
        <>
            <Jumbotron fluid className="Cabecalho-Jumbotron">
                <Container className="Margem-Jumbotron">
                    <h1>{titulo_secao.rodape}</h1>
                    <p>
                        {titulo_secao.comentario_rodape}
                    </p>
                </Container>
            </Jumbotron>
        </>
    );

}

export default FooterApp;