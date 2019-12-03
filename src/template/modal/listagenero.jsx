import React, { useState, useEffect } from 'react';
//import { Button, Table, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "firebase/app";
import "firebase/database";
import { config } from "../../config";

import Table from '../modal/table';

firebase.initializeApp(config);

function ListaGenero() {
  const [snapshot, setSnapshot] = useState([]);

  useEffect(() => {
    
    firebase.database().ref('generos/').on('value', function (_snapshot) {
      console.log(_snapshot.val());
      setSnapshot(_snapshot.val());
    });
  }, []);  

  return (
    <>

      <Table characterData={snapshot} />

      {/* <Table striped responsive="lg">
        <thead>
          <tr>      
            <th>Título</th>
            <th>Título Original</th>
            <th>Ano de Criação</th>
            <th>Descrição</th> 
            <th colSpan="2">Ações</th>           
          </tr>
        </thead>
        <tbody>
          {
          snapshot && snapshot.map((item, i) => <tr key={i}>
            <td>{item.titulo}</td><td>{item.titulo_original}</td>
            <td>{item.ano_criacao}</td><td>{item.descricao}</td>
            <td colsapn="2">
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Editar</Tooltip>}>
              <Button variant="primary">
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              </OverlayTrigger>&nbsp;
              <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Excluir</Tooltip>}>
              <Button variant="danger" data-tip="Excluir">
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
              </OverlayTrigger>
             </td>
          </tr>)
          }
        </tbody>
      </Table>     */}
      </>
        );
 
}

export default ListaGenero;