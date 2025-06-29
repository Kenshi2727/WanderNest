import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/handler/ScrollToTop';

function App() {

  return (
    <div>
      <ScrollToTop />
      <Outlet />
    </div>
  )
}

export default App
