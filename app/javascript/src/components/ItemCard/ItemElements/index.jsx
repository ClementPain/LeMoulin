import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { remove } from '../../../api/api-manager'

const UpdateItemButton = ({item}) => (
    <Button as={Link} to={`/shop/${item.shop.id}/item/${item.id}/update_an_item`}>Modifier le produit</Button>
)

const DestroyItemButton = ({item, onClick}) => (
  <Button onClick={remove(`items/${item.id}`)}>Supprimer le produit</Button>
)

export { UpdateItemButton, DestroyItemButton }