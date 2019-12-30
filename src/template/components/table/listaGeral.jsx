import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";
import TableGeral from './tableGeral';

export default function ListaGeral({ tableData, titulos }) {
    const [snapshot, setSnapshot] = useState([]);

    useEffect(() => {

        firebase.database().ref(`${tableData}/`).on('value', function (_snapshot) {
            setSnapshot(_snapshot.val());
        });
    }, []);

    var filtered = snapshot && snapshot.filter(function (el) {
        return el != null;
    });

    return <TableGeral characterData={filtered} titulos={titulos} tableData={tableData} />
}