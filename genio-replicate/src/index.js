import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import loadable from '@loadable/component'
const Header = loadable(() => import('./Header'));
const App = loadable(() => import('./App'));
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);