import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";
import Table from '../form/components/table/tablePremiacao';

export default function ListaPremiacao() {
    const [snapshot, setSnapshot] = useState([]);

    useEffect(() => {

        firebase.database().ref('premiacoes/').on('value', function (_snapshot) {
            setSnapshot(_snapshot.val());
        });
    }, []);

    return <Table characterData={snapshot} />
}