import React, { useState, useEffect }  from 'react';
import firebase from "firebase/app";

export default function SelectPremiacao() {
         
    const [paisOrigem, setPaisOrigem] = useState([]);
    
    useEffect(() => {
        firebase.database().ref('premiacoes/').on('value', function (_paisOrigem) {
            setPaisOrigem(_paisOrigem.val());
        });
    }, []);     

    return (     
        paisOrigem && paisOrigem.map((text, i) => <option key={i} value={text.titulo} >                                        
        {text.titulo}</option>)
    )
}