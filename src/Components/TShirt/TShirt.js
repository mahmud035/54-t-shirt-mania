import React from 'react';
import './TShirt.css';

const TShirt = ({ tshirt, handleAddToCart }) => {
  const { name, picture, price } = tshirt;

  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <div className="t-shirt-info">
        <h2>Name: {name}</h2>
        <h4>Price: {price}</h4>
        <button
          onClick={() => handleAddToCart(tshirt)}
          className="btn-add-to-cart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default TShirt;
