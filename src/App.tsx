import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Mi App de Compras</h1>
        <nav>
          <ul className='flex flex-row gap-10 justify-center mt-10 mb-10'>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/lists">Shopping Lists</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Aquí se inyectan las rutas hijas */}
        <Outlet />
      </main>
    </div>
  );
};

export default App;
