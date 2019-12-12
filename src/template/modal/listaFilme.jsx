import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";
import TableGeral from '../form/components/table/tableGeral';

export default function ListaFilme() {
    const [snapshot, setSnapshot] = useState([]);

    useEffect(() => {

        firebase.database().ref('filmes/').on('value', function (_snapshot) {
            setSnapshot(_snapshot.val());
        });
    }, []);

    const titles = [{ title: "Título", field: "titulo", search: false, iskey: true },
    { title: "Título Original", field: "titulo_original", search: true, iskey: false },
    { title: "Ano de Lançamento", field: "ano_lancamento", search: false, iskey: false },
    { title: "País de Origem", field: "pais_origem", search: true, iskey: false }];

    return <TableGeral characterData={snapshot} titulos={titles} />
}