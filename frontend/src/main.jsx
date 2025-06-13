import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import Profile from './components/Profile'
import Settings from './components/Settings';


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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>,
)
