import React from 'react';
import { create } from '../../../../api/api-manager';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Cookie from 'js-cookie';

const ButtonCreateOrder = ({ cart, setAlert }) => {
  const history = useHistory()

  const handleOrder = (cart, setAlert) => {
    create('orders', {
      data: { order: cart },
      onSuccess: () => {
        Cookie.remove('cart')
        history.push('/profile/my_cmds')
      },
      onError: (error) => {
        console.log('error', error)
        setAlert(error)
      },
      onErrors: (errors) => {
        console.log('errors', errors)
        setAlert(errors)
      }
    })
  }

  return (
  <Button
    variant='outline-success'
    className='btn-sm mb-3 btn_success_sass'
    onClick={() => handleOrder(cart, setAlert)}
  >
    Passer commande
  </Button>
  )
}

export default ButtonCreateOrder;