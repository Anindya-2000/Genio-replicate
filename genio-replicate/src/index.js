import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import loadable from '@loadable/component'
const Header = loadable(() => import('./Header'));
const App = loadable(() => import('./App'));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);