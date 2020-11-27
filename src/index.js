import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './components/CardGenerator';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
