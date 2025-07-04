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
import Lenis from 'lenis';

// Initialize Lenis globally
const lenis = new Lenis({
  // lerp: 0.1,
  // smoothWheel: true,
  // smoothTouch: true,
  // anchors: true,

  smooth: true,           // Enable smooth scrolling
  lerp: 0.05,             // Lower → softer, more buttery feel (default 0.1) :contentReference[oaicite:1]{index=1}
  wheelMultiplier: 1.2,   // Slightly amplify mouse wheel speed for responsiveness :contentReference[oaicite:2]{index=2}
  smoothWheel: true,      // Smooth wheel input
  smoothTouch: true,      // Also smooth on touch devices
  duration: 1.2,          // Animation duration (ignored when lerp set, but harmless) :contentReference[oaicite:3]{index=3}
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Default easing curve :contentReference[oaicite:4]{index=4}
  anchors: true,          // Smooth scroll for anchor links
  autoResize: true        // Keep size in sync when layout changes
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);//run the frame function recursively
}
requestAnimationFrame(raf);

// attach Lenis to the global window object for ScrollToTop Component
window.lenis = lenis;

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
        path: '/category/:id/:locationId',
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
      <div id="top" className="pt-16">
        <RouterProvider router={router} />
        <Footer />
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <DefferedPromptProvider>
    <Root />
  </DefferedPromptProvider>
)
