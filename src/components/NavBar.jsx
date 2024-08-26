// src/components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px', backgroundColor: '#333', color: '#fff' }}>
      <div>
        <img src="../../public/images/logo.png" alt="Logo" style={{ width: '50px' }} />
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ margin: '0 10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
        <li style={{ margin: '0 10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Hamburguesas</a></li>
        <li style={{ margin: '0 10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Pizzas</a></li>
        <li style={{ margin: '0 10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Bebidas</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
