import React, { useState, Component, Fragment } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { faList, faUndoAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import firebase from "firebase/app";
import "firebase/database";
import { config } from "../../config";

firebase.initializeApp(config);

class ListaGenero extends Component {

  state = {
    snapshot: {}
  };

  componentWillMount() {

    firebase.database().ref('generos/').on('value', ((snapshot) => {
      console.log(snapshot.val());
      this.setState({ snapshot: snapshot.val() });
    }).bind(this));
  }

  render() {

    const array = [];

    Object.keys(this.state.snapshot).forEach(a => {
      array.push(this.state.snapshot[a]);
    });

    return <ul>
      {array.map((item, i) => <li key={i}>{item.titulo} - {item.titulo_original}</li>)}
    </ul>;//<h1>{five && five.titulo}</h1>;
  }
}

export default ListaGenero;