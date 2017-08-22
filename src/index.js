import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './App.css';
import patientskylogo from './img/patientskylogo.png';
import {BrowserRouter as Router} from 'react-router-dom';

let baseUrl = 'https://fest-searcher.herokuapp.com/api/fest/s';

ReactDOM.render(
    <div>
        <Router>
            <Header logo={patientskylogo}></Header>
        </Router>
    </div>,
    document.getElementById('app')
);