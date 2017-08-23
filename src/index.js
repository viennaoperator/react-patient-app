import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {AppFrame} from './components/AppFrame.js';
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import patientskyApp from './reducers';
let store = createStore(patientskyApp);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <AppFrame />
        </div>
    </Provider>,
    document.getElementById('app')
);