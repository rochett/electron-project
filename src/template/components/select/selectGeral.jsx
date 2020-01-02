import React, { useState, useEffect } from 'react';
import firebase from "firebase/app";

export default function SelectGeral({ tableData, valueTag, fieldTag }) {

    const [selectDadosGeral, setSelectDadosGeral] = useState([]);

    useEffect(() => {
        firebase.database().ref(`${tableData}/`).on('value', function (_selectDadosGeral) {
            setSelectDadosGeral(_selectDadosGeral.val());
        });
    }, []);

    return (
        <>            
            {                
                fieldTag ? selectDadosGeral && selectDadosGeral.map((text, i) => <option key={i} value={text[valueTag]} >
                {text[valueTag]}&nbsp;({text[fieldTag]})</option >) : selectDadosGeral && selectDadosGeral.map((text, i) => <option key={i} value={text[valueTag]} >
                {text[valueTag]}</option >)
            } 
        </>
    )
}
