import React, { useState, useEffect }  from 'react';
import firebase from "firebase/app";

export default function SelectRoteirista() {
         
    const [paisOrigem, setPaisOrigem] = useState([]);
    
    useEffect(() => {
        firebase.database().ref('roteiristas/').on('value', function (_paisOrigem) {
            setPaisOrigem(_paisOrigem.val());
        });
    }, []);     

    return (     
        paisOrigem && paisOrigem.map((text, i) => <option key={i} value={text.nome} >                                        
        {text.nome}</option>)
    )
}