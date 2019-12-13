import React from 'react';
import { Card } from 'react-bootstrap';
import YoutubeVideo from '../components/youtube/youtubevideo';
import { faFilm, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MenuVideo() {

    return (
        <>
            <Card bg="dark" text="white">
                <Card.Header>Trailers<FontAwesomeIcon icon={faFilm} className="Icon-Menu" /></Card.Header>
                <Card.Body>
                    <Card.Title>IT 2 - Trailer do cinema</Card.Title>
                    <Card.Text>
                        Trailer veiculado antes (e/ou) após sessões cinematográficas
                        antes de sua estréia oficial.
                        </Card.Text>
                    <YoutubeVideo />
                </Card.Body>
                <Card.Header>Curiosidades<FontAwesomeIcon icon={faExclamationCircle} className="Icon-Menu" /></Card.Header>
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
