import React from 'react';
import './App.css';
import MenuFilmes from './template/menufilmes';
import MenuAtores from './template/menuatores';
import MenuVideo from './template/menuvideo';
import MenuDiretores from './template/menudiretores';
import MenuGeneros from './template/menugeneros';
import MenuRoteiristas from './template/menuroteiristas';
import MenuPremiacoes from './template/menupremiacoes';
import MenuCartaz from './template/menucartaz';
import { CardDeck } from 'react-bootstrap';
import CControlledCarousel from './template/carrousel/carrousel';
import FooterApp from './template/footerapp';
import firebase from "firebase/app";
import "firebase/database";
import { config } from "./config";

firebase.initializeApp(config);

function App() {
  return (
    <div className="container-fluid">

      <CControlledCarousel />

      <div><hr></hr></div>

      <CardDeck>

        <MenuFilmes />

        <MenuAtores />

        <MenuDiretores />

        <MenuVideo />

      </CardDeck>

      <div><hr></hr></div>

      <CardDeck>

        <MenuCartaz />

        <MenuRoteiristas />

        <MenuGeneros />

        <MenuPremiacoes />

      </CardDeck>

      <div><hr></hr></div>

      <FooterApp />

    </div>

  );
}

export default App;