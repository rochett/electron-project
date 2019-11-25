import React from 'react';
import './App.css';
import MenuFilmes from './template/menufilmes';
import MenuAtores from './template/menuatores';
import MenuVideo from './template/menuvideo';
import MenuDiretores from './template/menudiretores';
import MenuGeneros from './template/menugeneros';
import MenuRoteiristas from './template/menuroteiristas';
import MenuPremiacoes from './template/menupremiacoes';
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

            <MenuVideo />        

        </CardDeck>             

        <div><hr></hr></div> 

        <CardDeck>          

            <MenuDiretores />        

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