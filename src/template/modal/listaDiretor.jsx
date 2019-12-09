import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";
import Table from '../form/components/table/tableDiretor';

export default function ListaDiretor() {
    const [snapshot, setSnapshot] = useState([]);

    useEffect(() => {

        firebase.database().ref('diretores/').on('value', function (_snapshot) {
            setSnapshot(_snapshot.val());
        });
    }, []);

    return <Table characterData={snapshot} />
}