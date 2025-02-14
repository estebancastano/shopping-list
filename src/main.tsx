import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Products from './components/Products';
import ShoppingLists from './components/ShoppingLists';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Nuestro layout principal
    errorElement: <h1>Error 404: Página no encontrada</h1>,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'lists',
        element: <ShoppingLists />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="442509359948-r4g2d9cb048ikmbeh3mrd73d3h9q0377.apps.googleusercontent.com">
    <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>,
)
