import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";

export default function SelectGeral({ tableData, valueTag, fieldTag }) {

    const [selectGeral, setSelectGeral] = useState([]);

    useEffect(() => {
        firebase.database().ref(`${tableData}/`).on('value', function (_selectGeral) {
            setSelectGeral(_selectGeral.val());
        });
    }, []);

    return (
        <>
            {
                fieldTag ? selectGeral && selectGeral.map((text, i) => <option key={i} value={text[valueTag]} >
                {text[valueTag]}&nbsp;({text[fieldTag]})</option >) : selectGeral && selectGeral.map((text, i) => <option key={i} value={text[valueTag]} >
                {text[valueTag]}</option >)
            } 
        </>
    )
}
