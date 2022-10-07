import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveItem }) => {
  return (
    <div>
      <h1>Order Summary</h1>
      <h3>Order Quantity: {cart.length}</h3>

      {cart.map((tshirt, index) => (
        <p key={index}>
          {tshirt.name}
          <button onClick={() => handleRemoveItem(tshirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
