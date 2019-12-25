import React, { useState, useEffect } from 'react';
import { Form, Tabs, Tab } from 'react-bootstrap';
import ButtonsForm from '../../components/button/buttonsForm';
import FormGeneral from '../../components/formgeral/formGeneral';
import firebase from "firebase/app";
import SaveDataGeneral from '../../function/saveDataGeneral';

export default function FormGenero({tableData}) {

    const [selectGeral, setSelectGeral] = useState([]);

    useEffect(() => {
        firebase.database().ref(`${tableData}/`).on('value', function (_selectGeral) {
            setSelectGeral(_selectGeral.val());
        });
    }, []);     

    const handleSubmit = event => {        
        const dados = event.currentTarget;                     
        var dadosId=selectGeral && selectGeral[selectGeral.length - 1].id + 1;                              
        SaveDataGeneral(tableData, dados, dadosId);                       
        event.preventDefault();            
        event.currentTarget.reset();                             
    } 

    return (

        <Form onSubmit={handleSubmit}>

            <Tabs defaultActiveKey="ficha" id="uncontrolled-tab-example">
                <Tab eventKey="ficha" title="Ficha Técnica">
                    <hr></hr>
                    <FormGeneral />
                </Tab>
            </Tabs>

            <br></br>

            <ButtonsForm />

        </Form>

    );
}

