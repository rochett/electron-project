import React, { useState, useEffect } from 'react';
import { Card, Form, Tabs, Tab } from 'react-bootstrap';
import MultiGeral from '../../components/multilist/multilistGeral';
import ButtonsForm from '../../components/button/buttonsForm';
import FormGeneralFields from '../../components/formgeral/formGeneralFields';
import firebase from "firebase/app";
import '../../components/uploader/css/bootstrap.min.css' ;
import '../../components/uploader/css/styleUpload.css' ;
import SaveData from '../../function/saveData';
import UploadFile from '../../components/uploader/uploadFile';
import TextGeral from '../../components/text/textGeral';

export default function FormAtor({tableData}) {    
    
    const [selectGeral, setSelectGeral] = useState([]);

    useEffect(() => {
        firebase.database().ref(`${tableData}/`).on('value', function (_selectGeral) {
            setSelectGeral(_selectGeral.val());
        });
    }, []);

     //Preenchendo o nome do arquivo no select
     const handleChange = event => {
        var fileName = event.currentTarget.value.split("\\").pop();        
        var retorno = document.getElementById("labelFile");
        retorno.innerHTML = fileName;
    }

    const handleSubmit = event => {        
        const dados = event.currentTarget;                     
        var dadosId=selectGeral && selectGeral[selectGeral.length - 1].id + 1;                              
        SaveData(tableData, dados, dadosId);                       
        event.preventDefault();            
        event.currentTarget.reset();            
        var limpeza = document.getElementById("labelFile");
        limpeza.innerHTML = '';                  
    } 

    return (
        
        <Form onSubmit={handleSubmit} encType="multipart/form-data">

            <Tabs defaultActiveKey="ator" id="uncontrolled-tab-example">
                <Tab eventKey="ator" title="Ator/Atriz">
                    <hr></hr>
                    <FormGeneralFields titleTag="Ator/Atriz" />
                </Tab>
               
                <Tab eventKey="biografia" title="Biografia">
                    <hr></hr>
                    <TextGeral titleTag="Ator/Atriz" />
                </Tab>

                <Tab eventKey="premiacao" title="Premiações">
                    <hr></hr>
                    <MultiGeral titleTag="Premiações" valueTag="titulo" />
                </Tab>

                <Tab eventKey="foto" title="Foto">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Foto</Card.Header>
                        <Card.Body>                            
                            <UploadFile handleChange={handleChange} />
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>

            <br></br>

            <ButtonsForm />

        </Form>

    );
}

