import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";
import Table from '../form/components/table/tableGenero';

export default function ListaGenero() {
  const [snapshot, setSnapshot] = useState([]);

  useEffect(() => {

    firebase.database().ref('generos/').on('value', function (_snapshot) {
      setSnapshot(_snapshot.val());
    });
  }, []);

  return <Table characterData={snapshot} />
}