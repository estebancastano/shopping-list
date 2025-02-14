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
    element: <App />,
    errorElement:
      <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
        <div className="flex flex-col items-center">
          <h1 className="text-[120px] font-extrabold text-gray-700">404</h1>
          <p className="text-2xl font-medium text-gray-600 mb-4">Página No Encontrada</p>
          <a href="/"
            className="px-4 py-2 font-medium bg-gray-300 rounded-md hover:bg-indigo-700 transition-all duration-200 ease-in-out">
            Ir a Inicio
          </a>
        </div>
      </div>,
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
