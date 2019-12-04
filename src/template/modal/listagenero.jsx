import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/database";
import { config } from "../../config";

import Table from '../modal/table';

firebase.initializeApp(config);

export default function ListaGenero() {
  const [snapshot, setSnapshot] = useState([]);

  useEffect(() => {

    firebase.database().ref('generos/').on('value', function (_snapshot) {
      setSnapshot(_snapshot.val());
    });
  }, []);

  return <Table characterData={snapshot} />
}