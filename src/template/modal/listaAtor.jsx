import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";
import TableGeral from '../form/components/table/tableGeral';

export default function ListaAtor() {
    const [snapshot, setSnapshot] = useState([]);

    useEffect(() => {

        firebase.database().ref('atores/').on('value', function (_snapshot) {
            setSnapshot(_snapshot.val());
        });
    }, []);

    const titles = [{ title: "Nome", field: "nome", search: false, iskey: true },
    { title: "Data de Nascimento", field: "data_nascimento", search: false, iskey: false },
    { title: "Filmes", field: "filmes", search: true, iskey: false },
    { title: "País de Origem", field: "pais_origem", search: true, iskey: false },
    { title: "Premiações", field: "premiacoes", search: true, iskey: false }];

    return <TableGeral characterData={snapshot} titulos={titles} />
}