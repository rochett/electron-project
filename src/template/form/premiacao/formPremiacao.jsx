import React, { useState, useEffect } from 'react';
import { Form, Tabs, Tab } from 'react-bootstrap';
import ButtonsForm from '../../components/button/buttonsForm';
import FormGeneral from '../../components/formgeral/formGeneral';
import firebase from "firebase/app";
import SaveData from '../../function/saveData';

export default function FormPremiacao({ tableData }) {

    const [selectGeral, setSelectGeral] = useState([]);

    useEffect(() => {
        firebase.database().ref(`${tableData}/`).on('value', function (_selectGeral) {
            setSelectGeral(_selectGeral.val());
        });
    }, []);     

    const handleSubmit = event => {        
        const dados = event.currentTarget;
        const _dados = {
            titulo: dados.titulo.value,
            titulo_original: dados.titulo_original.value,
            descricao: dados.descricao.value,
            ano_criacao: dados.ano_criacao.value,
            pais_origem: dados.pais_origem.value,
            obra_maxima: dados.obra_maxima.value,
        };                            
        var dadosId=selectGeral && selectGeral[selectGeral.length - 1].id + 1;                               
        SaveData(tableData, _dados, dadosId);                       
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

