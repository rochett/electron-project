import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";
import Table from '../form/components/table/tableAtor';

export default function ListaAtor() {
    const [snapshot, setSnapshot] = useState([]);

    useEffect(() => {

        firebase.database().ref('atores/').on('value', function (_snapshot) {
            setSnapshot(_snapshot.val());
        });
    }, []);

    return <Table characterData={snapshot} />
}