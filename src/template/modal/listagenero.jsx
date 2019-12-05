import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";
import Table from '../modal/table';

export default function ListaGenero() {
  const [snapshot, setSnapshot] = useState([]);

  useEffect(() => {

    firebase.database().ref('generos/').on('value', function (_snapshot) {
      setSnapshot(_snapshot.val());
    });
  }, []);

  return <Table characterData={snapshot} />
}