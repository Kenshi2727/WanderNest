import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import Profile from './components/Profile'
import Settings from './components/Settings';
import { useThemeStore } from './store/useThemeStore';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    element: <App />,
    children: [
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/settings',
        element: <Settings />
      }
    ]
  }
]);

function Root() {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <div data-theme={theme}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
