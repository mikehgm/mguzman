import React from 'react';
import useSmoothScroll from './hooks/useSmoothScroll';
import useBodyClass from './hooks/useBodyClass';
import Home from './views/Home/Home';
import NavPanel from './components/NavPanel/NavPanel';

function App() {
  useSmoothScroll();
  useBodyClass('is-preload');
  return (
    <>
      <Home />
      <NavPanel />
    </>
  );
}

export default App;
