import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveItem }) => {
  let message;

  if (cart.length === 0) {
    message = <p>Please Buy at least One item</p>;
  } else if (cart.length === 1) {
    message = (
      <div>
        <h3>Amar jonno ekta nao</h3>
        <p>tomar nijer jonno ekta nao</p>
      </div>
    );
  } else {
    message = <p>Thanks for Buying</p>;
  }

  return (
    <div>
      <h1 className={cart.length === 2 ? 'orange' : 'purple'}>Order Summary</h1>
      <h3 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>
        Order Quantity: {cart.length}
      </h3>

      {cart.map((tshirt, index) => (
        <p key={index}>
          {tshirt.name}
          <button onClick={() => handleRemoveItem(tshirt._id)}>X</button>
        </p>
      ))}

      {message}

      {cart.length === 3 ? <p>Added 3 item</p> : <p>kino kino</p>}

      <p>AND operator</p>
      {cart.length === 2 && <h2>Double Item</h2>}

      <p>OR operator</p>
      {cart.length === 4 || <p>Not 4 Items</p>}
    </div>
  );
};

export default Cart;

/* 
//* Conditional Rendering
1. use element in a variable and then use if-else to set value
2. use ternary operator 
* 3. && operator (if condition is true, I want to display something)
! 4. || operator (if condition is false, I want to display something)
*/
