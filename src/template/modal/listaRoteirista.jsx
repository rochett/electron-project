import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";
import Table from '../form/components/table/tableRoteirista';

export default function ListaRoteirista() {
    const [snapshot, setSnapshot] = useState([]);

    useEffect(() => {

        firebase.database().ref('roteiristas/').on('value', function (_snapshot) {
            setSnapshot(_snapshot.val());
        });
    }, []);

    return <Table characterData={snapshot} />
}