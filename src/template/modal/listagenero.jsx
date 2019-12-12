import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";
import TableGeral from '../form/components/table/tableGeral';

export default function ListaGenero() {
  const [snapshot, setSnapshot] = useState([]);

  useEffect(() => {

    firebase.database().ref('generos/').on('value', function (_snapshot) {
      setSnapshot(_snapshot.val());
    });
  }, []);

  const titles = [{ title: "Título", field: "titulo", search: false, iskey: true },
  { title: "Título Original", field: "titulo_original", search: false, iskey: false },
  { title: "Ano de Criação", field: "ano_criacao", search: false, iskey: false },
  { title: "Descrição", field: "descricao", search: true, iskey: false }];

  return <TableGeral characterData={snapshot} titulos={titles} />
}