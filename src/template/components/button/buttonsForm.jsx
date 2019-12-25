import React  from 'react';
import { faCheck, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';

export default function ButtonsForm() {    

    return (

        <div className="row" width="100%">
            <div className="col-6">
                <Button type="submit" variant="primary" ><FontAwesomeIcon icon={faCheck} />&nbsp;Salvar</Button>
            </div>
            <div className="col-6" align="right">
                <Button type="reset" variant="danger" ><FontAwesomeIcon icon={faSyncAlt} />&nbsp;Limpar</Button>
            </div>
        </div>    
    )
}            