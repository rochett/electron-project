import React  from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';

export default function ButtonSwap() {

    return (
        <>
            <br></br><br></br>
            <div align="center">
                <Button type="submit" size="sm" variant="primary" ><FontAwesomeIcon icon={faArrowRight} /></Button>
            </div>
            <br></br>
            <div align="center">
                <Button type="submit" size="sm" variant="primary" ><FontAwesomeIcon icon={faArrowLeft} /></Button>
            </div> 
        </>
    )
} 