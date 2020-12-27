import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './footer.js';
import Gplay from './gplay';
import Improve from './improve'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Gplay />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);