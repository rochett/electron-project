import React from 'react';
import './App.css';
import MenuFilmes from './template/menufilmes';
import MenuAtores from './template/menuatores';
import { CardDeck } from 'react-bootstrap';
import CControlledCarousel from './template/carrousel/carrousel';
import FooterApp from './template/footerapp';

function App() {
    return (
      <div className="container-fluid">         

        <CControlledCarousel />         

        <div><hr></hr></div>            

        <CardDeck>          

            <MenuFilmes />                    

            <MenuAtores />          

            <MenuFilmes />          

            <MenuFilmes />          

          </CardDeck>  

          <div><hr></hr></div>

          <FooterApp />  

      </div>      

    );
}

export default App;