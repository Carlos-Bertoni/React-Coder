// src/components/CartWidget.jsx
import React from 'react';

const CartWidget = () => {
  const itemCount = 0; // Este valor cambia según los artículos en el carrito

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="../../public/images/cart-icon.png" alt="Carrito" style={{ width: '24px', marginRight: '15px' }} />
      <span>{itemCount}</span>
    </div>
  );
};

export default CartWidget;

