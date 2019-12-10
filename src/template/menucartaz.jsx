import React from 'react';
import { Card } from 'react-bootstrap';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
import { titulo_secao } from '../configapp';
import ImagemCartaz from './imagemcartaz';

export default function MenuCartaz() {

    return (
        <>
            <Card bg="dark" text="white">
                <Card.Header>{titulo_secao.cartaz.titulo}<FontAwesomeIcon icon={faFilm} className="Icon-Menu" /></Card.Header>
                <Card.Body>
                    <Card.Title>IT 2 - Cartaz EUA</Card.Title>
                    <ImagemCartaz />
                </Card.Body>
            </Card>
            <br />
        </>
    );

}
