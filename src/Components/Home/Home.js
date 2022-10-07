import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt, _id) => {
    const exists = cart.find((item) => item._id === _id);
    if (exists) {
      alert('Already exists');
      return;
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
      // alert('Successfully added');
    }
  };

  const handleRemoveItem = (_id) => {
    const remaining = cart.filter((item) => item._id !== _id);
    setCart(remaining);
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
        <Cart cart={cart} handleRemoveItem={handleRemoveItem}></Cart>
      </div>
    </div>
  );
};

export default Home;
