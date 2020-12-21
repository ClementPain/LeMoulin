import React, { useContext } from 'react';
import Caddy from './Panier.png';
import CartGlobalQuantity from '../../pages/TheMill/context';

const CaddyIcon = () => {
  const { cartGlobalQuantity } = useContext(CartGlobalQuantity);

  return (
    <div className="d-flex flex-column justify-content-between align-items-center">
      <div>
        {cartGlobalQuantity}
      </div>
      <img src={Caddy} className="caddy" style={{ height: 30 }} alt="Caddy" />
    </div>
  );
};

export default CaddyIcon;
