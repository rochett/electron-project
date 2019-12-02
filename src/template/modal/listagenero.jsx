import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { faList, faUndoAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import firebase from "firebase/app";
import "firebase/database";
import { config } from "../../config";

firebase.initializeApp(config);

function ListaGenero() {
  const [snapshot, setSnapshot] = useState([]);

  useEffect(() => {
    
    firebase.database().ref('generos/').on('value', function (_snapshot) {
      console.log(_snapshot.val());
      setSnapshot(_snapshot.val());
    });
  }, []);

  return <ul>
    {snapshot && snapshot.map((item, i) => <li key={i}>{item.titulo} - {item.titulo_original}</li>)}
  </ul>;
}

export default ListaGenero;