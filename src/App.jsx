import React, { useState, useEffect } from 'react';
import './App.css';
import MenuFilmes from './template/menu/menuFilmes';
import MenuAtores from './template/menu/menuAtores';
import MenuVideo from './template/menu/menuVideo';
import MenuDiretores from './template/menu/menuDiretores';
import MenuGeneros from './template/menu/menuGeneros';
import MenuRoteiristas from './template/menu/menuRoteiristas';
import MenuPremiacoes from './template/menu/menuPremiacoes';
import MenuCartaz from './template/menu/menuCartaz';
import NavBar from './template/components/navBar/navBar';
import { CardDeck } from 'react-bootstrap';
import CControlledCarousel from './template/components/carrousel/carrousel';
import FooterApp from './template/components/footer/footerapp';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import { config } from "./config";

firebase.initializeApp(config);

export default function App() {  

  var getTableData = function (tableData) {

    const [infoGeral, setInfoGeral] = useState([]);

    useEffect(() => {
      firebase.database().ref(`${tableData}/`).on('value', function (_infoGeral) {
        setInfoGeral(_infoGeral.val());
      });
    }, []);

    return infoGeral && infoGeral[infoGeral.length - 1];
  }

  const lastMovieElement = getTableData('filmes');
  const lastActorElement = getTableData('atores');
  const lastGenreElement = getTableData('generos');
  const lastWriterElement = getTableData('roteiristas');
  const lastPrizeElement = getTableData('premiacoes');
  const lastDirectorElement = getTableData('diretores');

  return (

    <div className="container-fluid">

      <NavBar />          

      <CControlledCarousel />

      <div><hr></hr></div>

      <CardDeck>

        <MenuFilmes lastMovieTag={lastMovieElement} />

        <MenuAtores lastMovieTag={lastActorElement} />

        <MenuDiretores lastMovieTag={lastDirectorElement} />

        <MenuVideo lastMovieTag={lastMovieElement} />

      </CardDeck>

      <div><hr></hr></div>

      <CardDeck>

        <MenuCartaz lastMovieTag={lastMovieElement} />

        <MenuRoteiristas lastMovieTag={lastWriterElement} />

        <MenuGeneros lastMovieTag={lastGenreElement} />

        <MenuPremiacoes lastMovieTag={lastPrizeElement} />

      </CardDeck>

      <div><hr></hr></div>

      <FooterApp />

    </div>

  );
}
