import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import firebase from "firebase/app";

export default function ListMenuGeral({ lastMovieTag, tableData, valueTag, regTag, regLimitTag, fieldTag, filterTag }) {        
    
  var result = lastMovieTag && lastMovieTag[valueTag].split(", ", regLimitTag);  
  
  if (fieldTag) {    
      
      const [resultMovie, setResultMovie] = useState([]);

      useEffect(() => {
          firebase.database().ref(`${tableData}/`).on('value', function (_resultMovie) {
              setResultMovie(_resultMovie.val());
          });
      }, []);               
      
      result = resultMovie && resultMovie.filter(obj => obj[`${fieldTag}`].toLowerCase().includes(`${filterTag}`.toLowerCase())).slice(0, regLimitTag);                
      
    } 

    return (

        <ListGroup className="list-group-flush">          
          {
            regTag ? <ListGroupItem variant="dark">{lastMovieTag && lastMovieTag.diretor}&nbsp;(Direção)</ListGroupItem> : ''
          }   
          {           
            fieldTag ? result && result.map((text, i) => <ListGroupItem key={i} variant="dark">
            {text.titulo}&nbsp;({text.ano_lancamento})</ListGroupItem>) : result && result.map((text, i) => <ListGroupItem key={i} variant="dark">
            {text}</ListGroupItem>)          
          }
        </ListGroup>

    )
}