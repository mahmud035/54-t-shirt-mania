import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    console.log('add to cart clicked', tshirt);
    const newCart = [...cart, tshirt];
    setCart(newCart);
  };

  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {tshirts.map((tshirt, index) => (
          <TShirt
            key={index}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
