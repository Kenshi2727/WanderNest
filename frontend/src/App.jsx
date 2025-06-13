import React from 'react';
import { Outlet } from 'react-router-dom';
import { useThemeStore } from './store/useThemeStore';

function App() {
  const theme = useThemeStore();

  return (
    <div data-theme={theme}>
      <Outlet />
    </div>
  )
}

export default App
