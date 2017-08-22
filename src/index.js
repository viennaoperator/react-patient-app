import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MedicineDatabase from './components/MedicineDatabase';

let baseUrl = 'https://fest-searcher.herokuapp.com/api/fest/s';

ReactDOM.render(
  <div>
      <App />
      <MedicineDatabase baseUrl={baseUrl}/>
  </div>,
  document.getElementById('root')
);
