import React from 'react';
import loadable from '@loadable/component'
import Gplay from './gplay.js'
import Footer from './footer.js'

const Header = loadable(() => import('./Header'));
const MainUpper = loadable(() => import('./MainUpper'));
const App = () => {
  return (
    <div>
      <Header />
      <MainUpper />
      <Gplay />
    ` <Footer />
    </div>
  )
};

export default App;