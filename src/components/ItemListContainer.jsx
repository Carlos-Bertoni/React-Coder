// src/components/ItemListContainer.jsx
import React from 'react';

const ItemListContainer = ({ message }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>{message}</h2>
    </div>
  );
};

export default ItemListContainer;
