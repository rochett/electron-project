import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import './index.css';
import App from './App.jsx';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

function Init() {

    return (
        <Router>
            <Switch>
                <Route path="/:modal?" component={App} />
            </Switch>
        </Router>
    );
}

ReactDOM.render(<Init />, document.getElementById('root'));

serviceWorker.unregister();