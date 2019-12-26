import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import firebase from "firebase/app";


export default function ImagemCartaz({ tableData, valueTag }) {

    const [imgGeral, setImgGeral] = useState([]);

    useEffect(() => {
        firebase.database().ref(`${tableData}/`).on('value', function (_imgGeral) {
            setImgGeral(_imgGeral.val());
        });
    }, []);

    const lastElement = imgGeral && imgGeral[imgGeral.length - 1];

    return (

        <Image src={lastElement && lastElement[valueTag]} fluid className="img-responsive" alt="Cartaz" />
    );

}
