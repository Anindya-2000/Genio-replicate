import React from 'react';
import loadable from '@loadable/component'
const MainUpper = loadable(() => import('./Body'));
const Footer = loadable(() => import('./footer'));
const Gplay = loadable(() => import('./gplay'));
const App = () => {
  return (
    <div>
      <MainUpper />
      <Gplay />
      <Footer />
    </div>
  )
};

export default App;