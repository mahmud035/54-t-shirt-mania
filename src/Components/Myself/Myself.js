import React from 'react';
import SpecialOne from '../SpecialOne/SpecialOne';

const Myself = ({ house, ring }) => {
  return (
    <div>
      <h2>Myself</h2>
      <p>
        <small>House: {house}</small>
      </p>

      <section>
        <SpecialOne ring={ring}></SpecialOne>
      </section>
    </div>
  );
};

export default Myself;
