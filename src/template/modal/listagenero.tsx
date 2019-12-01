import React, { useState, Component, Fragment } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { faList, faUndoAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import firebase from "firebase/app";
import "firebase/database";
import { FirebaseDatabaseProvider, FirebaseDatabaseNode } from "@react-firebase/database";
import { config } from "../../config";

const s = (a: any) => JSON.stringify(a, null, 2);

export type AppState = {
    limit: number;
  };

firebase.initializeApp(config);

function readUserData() {
  firebase.database().ref('generos/').on('value', function (snapshot) {
    console.log(snapshot.val())
  });
}

readUserData();

class ListaGenero extends Component<any, AppState> {  
   
        state = {
          limit: 2
        };     

        render() {            

          return (
            <div>
                <FirebaseDatabaseProvider firebase={firebase} {...config}>
                <div>
                  <FirebaseDatabaseNode
                    path="generos/"
                    limitToFirst={this.state.limit}                    
                    orderByValue={"titulo"}                                     
                  >                                     
                    {d => {                      
                      return (
                        <Fragment>
                          <pre>Path {d.path}</pre>                          
                          <pre>
                          Value {s(d.value)}                              
                          </pre>                                            
                          <button
                            onClick={() => {
                              this.setState(state => ({ limit: state.limit + 2 }));
                            }}
                          >
                            Load more
                          </button>
                        </Fragment>
                      );
                    }}
                  </FirebaseDatabaseNode>
                </div>
              </FirebaseDatabaseProvider>
            </div>
          );
        }
}

export default ListaGenero;