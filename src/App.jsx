import React from 'react';
import './App.css';
import MenuFilmes from './template/menuFilmes';
import MenuAtores from './template/menuatores';
import MenuVideo from './template/menuVideo';
import MenuDiretores from './template/menuDiretores';
import MenuGeneros from './template/menuGeneros';
import MenuRoteiristas from './template/menuRoteiristas';
import MenuPremiacoes from './template/menuPremiacoes';
import MenuCartaz from './template/menuCartaz';
import { CardDeck } from 'react-bootstrap';
import CControlledCarousel from './template/carrousel/carrousel';
import FooterApp from './template/footerapp';
import firebase from "firebase/app";
import "firebase/database";
import { config } from "./config";

firebase.initializeApp(config);

export default function App() {
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
