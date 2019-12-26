import React, { useState, useEffect } from 'react';
import { Col, Card, Form, Tabs, Tab, InputGroup } from 'react-bootstrap';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SelectAno from '../../components/select/selectAno';
import ButtonsForm from '../../components/button/buttonsForm';
import SelectGeral from "../../components/select/selectGeral";
import MultiGeral from '../../components/multilist/multilistGeral';
import firebase from "firebase/app";
import '../../components/uploader/css/bootstrap.min.css';
import '../../components/uploader/css/styleUpload.css';
import SaveDataMovie from '../../function/saveDataMovie';
import UploadFile from '../../components/uploader/uploadFile';
import TextGeral from '../../components/text/textGeral';

export default function FormFilme({ tableData }) {

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
        const _dados = {
            titulo: dados.titulo.value,
            titulo_original: dados.titulo_original.value,
            sinopse: dados.sinopse.value,
            ano_lancamento: dados.ano_lancamento.value,
            trailer: dados.trailer.value,
            diretor: dados.diretor.value,
            genero: dados.genero.value,
            pais_origem: dados.pais_origem.value,
            premiacoes: dados.premiacoes.value,
            elenco: dados.atores.value,
            roteirista: dados.roteiristas.value,
            curiosidades: dados.curiosidades.value,
            comentario_trailer: dados.comentario_trailer.value,
            image_upload: dados.imageUpload.files[0]
        };
        var dadosId = selectGeral && selectGeral[selectGeral.length - 1].id + 1;
        SaveDataMovie(tableData, _dados, dadosId);
        event.preventDefault();
        event.currentTarget.reset();
        var limpeza = document.getElementById("labelFile");
        limpeza.innerHTML = '';
    }

    return (

        <Form onSubmit={handleSubmit} encType="multipart/form-data">

            <Tabs defaultActiveKey="ficha" id="uncontrolled-tab-example">
                <Tab eventKey="ficha" title="Ficha Técnica">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Ficha Técnica</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="6" controlId="titulo" controlName="titulo">
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Título"
                                        size="sm"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="titulo_original" controlName="titulo_original">
                                    <Form.Label>Título Original</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Título Original"
                                        size="sm"
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} md="5" controlId="diretor" controlName="diretor">
                                    <Form.Label>Direção</Form.Label>
                                    <Form.Control as="select" required size="sm">
                                        <SelectGeral tableData="diretores" valueTag="nome" />
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} md="3" controlId="pais_origem" controlName="pais_origem">
                                    <Form.Label>País de Origem</Form.Label>
                                    <Form.Control as="select" required size="sm">
                                        <SelectGeral tableData="pais_origem" valueTag="nome" />
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} md="3" controlId="genero" controlName="genero">
                                    <Form.Label>Gênero</Form.Label>
                                    <Form.Control as="select" required size="sm">
                                        <SelectGeral tableData="generos" valueTag="titulo" />
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} md="1" controlId="ano_lancamento" controlName="ano_lancamento">
                                    <Form.Label>Lançamento</Form.Label>
                                    <Form.Control as="select" required size="sm">
                                        <SelectAno />
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="elenco" title="Elenco">
                    <hr></hr>
                    <MultiGeral titleTag="Atores" valueTag="nome" />
                </Tab>

                <Tab eventKey="roteiro" title="Roteiro">
                    <hr></hr>
                    <MultiGeral titleTag="Roteiristas" valueTag="nome" />
                </Tab>

                <Tab eventKey="sinopse" title="Sinopse">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Sinopse</Card.Header>
                        <Card.Body>
                            <TextGeral titleTag="Sinopse do Filme" fieldTag="sinopse" />
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="premiacao" title="Premiações">
                    <hr></hr>
                    <MultiGeral titleTag="Premiações" valueTag="titulo" />
                </Tab>

                <Tab eventKey="trailer" title="Trailer">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Trailer</Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="trailer">
                                    <Form.Label>URL Trailer</Form.Label>
                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faVideo} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="URL Trailer"
                                            size="sm"
                                            controlId="trailer"
                                            controlName="trailer"
                                        />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <TextGeral titleTag="Comentário sobre o Trailer" fieldTag="comentario_trailer" />
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="cartaz" title="Cartaz/Curiosidades">
                    <hr></hr>
                    <Card>
                        <Card.Header as="h5">Cartaz/Curiosidades</Card.Header>
                        <Card.Body>
                            <UploadFile handleChange={handleChange} />
                            <TextGeral titleTag="Curiosidades sobre o Filme" fieldTag="curiosidades" />
                        </Card.Body>
                    </Card>
                </Tab>

            </Tabs>

            <br></br>

            <ButtonsForm />

        </Form>

    );
}

