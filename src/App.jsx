import React from 'react';
import useSmoothScroll from './hooks/useSmoothScroll';
import useBodyClass from './hooks/useBodyClass';
import Home from './views/Home/Home';

function App() {
  useSmoothScroll();
  useBodyClass('is-preload');
  return <Home />;
}

export default App;
