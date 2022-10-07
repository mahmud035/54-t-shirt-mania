import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const SpecialOne = () => {
  const [house, setHouse] = useContext(RingContext);

  return (
    <div>
      <h1>Special One</h1>
      <p>
        <small>Gift: {house}</small>
      </p>
      <button onClick={() => setHouse(house + 1)}>Increase</button>
    </div>
  );
};

export default SpecialOne;