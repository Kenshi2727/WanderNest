import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import Profile from './components/Profile'
import { useThemeStore } from './store/useThemeStore';
import Themes from './components/Themes';
import Category from './components/Category';
import SignUp from './components/auth/SignUp';
import { DefferedPromptProvider } from './context/DefferedPromptContext';
import SignIn from './components/auth/SignIn';
import LocationPage from './components/LocationPage';
import Navigator from './components/navigation/Navigator';

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
        element: [<Navigator />, <Profile />]
      },
      {
        path: '/themes',
        element: [<Navigator />, <Themes />]
      },
      {
        path: '/category/:id',
        element: [<Navigator />, <Category />]
      },
      {
        path: '/category/:id/:loactionId',
        element: [<Navigator />, <LocationPage />]
      },
      {
        path: '/auth/sign-up',
        element: <SignUp />
      },
      {
        path: '/auth/sign-in',
        element: <SignIn />
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
    <DefferedPromptProvider>
      <Root />
    </DefferedPromptProvider>
  </StrictMode >,
)
