import React from 'react';
import loadable from '@loadable/component'
import Gplay from './gplay.js'
import Footer from './footer.js'

const Header = loadable(() => import('./Header'));
const Body = loadable(() => import('./Body'));
const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Gplay />
    ` <Footer />
    </div>
  )
};

export default App;