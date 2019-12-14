import React from 'react';
import { Card } from 'react-bootstrap';
import YoutubeVideo from '../components/youtube/youtubevideo';
import { faFilm, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MenuVideo({lastMovieTag}) {    

    return (
        <>
            <Card bg="dark" text="white">
                <Card.Header>Trailers<FontAwesomeIcon icon={faFilm} className="Icon-Menu" /></Card.Header>
                <Card.Body>
                    <Card.Title>{lastMovieTag && lastMovieTag.titulo} - Trailer do cinema</Card.Title>
                    <Card.Text>
                        {lastMovieTag && lastMovieTag.comentario_trailer}
                    </Card.Text>
                    <YoutubeVideo videoUrl={lastMovieTag && lastMovieTag.trailer} />
                </Card.Body>
                <Card.Header>Curiosidades<FontAwesomeIcon icon={faExclamationCircle} className="Icon-Menu" /></Card.Header>
                <Card.Body>
                    <Card.Text>
                        {lastMovieTag && lastMovieTag.curiosidades}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </>
    );

}
