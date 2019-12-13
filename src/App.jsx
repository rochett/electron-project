import React from 'react';
import './App.css';
import MenuFilmes from './template/menu/menuFilmes';
import MenuAtores from './template/menu/menuAtores';
import MenuVideo from './template/menu/menuVideo';
import MenuDiretores from './template/menu/menuDiretores';
import MenuGeneros from './template/menu/menuGeneros';
import MenuRoteiristas from './template/menu/menuRoteiristas';
import MenuPremiacoes from './template/menu/menuPremiacoes';
import MenuCartaz from './template/menu/menuCartaz';
import { CardDeck } from 'react-bootstrap';
import CControlledCarousel from './template/components/carrousel/carrousel';
import FooterApp from './template/components/footer/footerapp';
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
