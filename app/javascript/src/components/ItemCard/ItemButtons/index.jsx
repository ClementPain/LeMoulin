import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { remove } from '../../../api/api-manager'

const UpdateItemButton = ({item}) => (
    <Button
      as={Link}
      to={`/shop/${item.shop.id}/item/${item.id}/update_an_item`}
      className='btn-sm'
    >
      Modifier le produit
    </Button>
)

const DeleteItemButton = ({item, redirection}) => (
  <Button
    className='btn-sm'
    variant='outline-danger'
    onClick={() => {
      remove(`items/${item.id}`, {
        onSuccess: redirection
      })
    }}
  >
    Supprimer le produit
  </Button>
)

export { UpdateItemButton, DeleteItemButton }