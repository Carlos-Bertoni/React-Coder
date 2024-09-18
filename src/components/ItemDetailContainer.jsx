// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import MockItemDetail from './MockItemDetail';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    <div>
      { MockItemDetail }
    </div>

    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        const foundItem = MockItemDetail.find(item => item.id === parseInt(itemId));
        resolve(foundItem);
      }, 1000);
    });

    getItem.then(result => setItem(result));
  }, [itemId]);

  const handleAddToCart = () => {
    console.log(`Producto "${item.name}" agregado al carrito.`);
    // Aquí iría la lógica de agregar al carrito
  };

  if (!item) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div style={{ width: '300px', padding: '20px', textAlign: 'center', border: '2px solid #ccc', alignItems: 'center' }}>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} style={{ width: '300px', margin: '20px 0' }} />
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <ItemCount />
      <button 
        onClick={handleAddToCart} 
        style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemDetailContainer;
