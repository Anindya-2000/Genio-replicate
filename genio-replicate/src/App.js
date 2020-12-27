import React from 'react';
import loadable from '@loadable/component'
const MainUpper = loadable(() => import('./MainUpper'));
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