import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Cookie from 'js-cookie';
import { create } from '../../../../api/api-manager';
import CartGlobalQuantityContext from '../../../TheMill/context';

const ButtonCreateOrder = ({ cart, setAlert, showOrderAlert }) => {
  const history = useHistory();
  const { computeCartGlobalQuantity } = useContext(CartGlobalQuantityContext);

  const handleOrder = (cart, setAlert) => {
    create('orders', {
      data: { order: cart },
      onSuccess: () => {
        Cookie.remove('cart');
        computeCartGlobalQuantity();
        history.push('/profile/my_cmds');
        showOrderAlert();
      },
      onError: (error) => {
        setAlert(error);
      },
      onErrors: (errors) => {
        setAlert(errors);
      },
    });
  };

  return (
    <Button
      variant="outline-success"
      className="btn-sm mb-3 btn_success_sass"
      onClick={() => handleOrder(cart, setAlert)}
    >
      Passer commande
    </Button>
  );
};

export default ButtonCreateOrder;
