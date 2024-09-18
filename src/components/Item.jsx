// Componente Item: lo muestro en el Home - Carpeta src/components/Item.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <h3>{item.name}</h3>
      <button>
        <Link to={`/item/${item.id}`}>Ver detalle</Link>
      </button>
    </div>
  );
};

export default Item;
