import React from 'react';
import { create } from '../../../../../api/api-manager';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Cookie from 'js-cookie';

const ButtonCreateOrder = ({ cart }) => {
  const history = useHistory()

  const handleOrder = (cart) => {
    create('orders', {
      data: { order: cart },
      onSuccess: () => {
        Cookie.remove('cart')
        history.push('/profile/my_cmds')
      }
    })
  }

  return (
  <Button
    variant='outline-success'
    className='btn-sm mb-3 btn_success_sass'
    onClick={() => handleOrder(cart)}
  >
    Passer commande
  </Button>
  )
}

export default ButtonCreateOrder;