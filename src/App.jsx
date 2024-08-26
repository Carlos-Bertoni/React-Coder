// src/App.jsx
import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer message="¡Bienvenidos! Muy pronto encuentra aquí todos nuestros productos." />
    </div>
  );
}

export default App;
