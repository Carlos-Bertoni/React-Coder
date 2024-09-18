// // src/App.jsx
// import React from 'react';
// import NavBar from './components/Navbar';
// import ItemListContainer from './components/ItemListContainer';

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <ItemListContainer message="¡Bienvenidos! Muy pronto encuentra aquí todos nuestros productos." />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer message="¡Bienvenidos! Elige aquí los productos que desees disfrutar" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer message="Categoría seleccionada" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </div>
  );
}

export default App;

