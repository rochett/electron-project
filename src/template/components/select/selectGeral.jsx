import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";

export default function SelectGeral({ tableData, valueTag }) {

    const [selectGeral, setSelectGeral] = useState([]);

    useEffect(() => {
        firebase.database().ref(`${tableData}/`).on('value', function (_selectGeral) {
            setSelectGeral(_selectGeral.val());
        });
    }, []);

    return (
        selectGeral && selectGeral.map((text, i) => <option key={i} value={text[valueTag]} >
            {text[valueTag]}</option >)
    )
}
