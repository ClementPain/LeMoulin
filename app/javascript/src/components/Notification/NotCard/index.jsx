import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';
import Bin from './delete.png'

import { update, remove } from '../../../api/api-manager';

const NotCard = ({ not, updateNots }) => {
  const handleDelete = (updateNotsVar) => {
    remove(`notifications/${not.id}`, {
      onSuccess: () => updateNotsVar((previousArray) => [...previousArray, not.id])
    });
  }

  const handleUpdate = (updateNotsVar) => {
    update(`notifications/${not.id}`, {
      onSuccess: () => updateNotsVar((previousArray) => [...previousArray, not.id])
    });
  }

  return (
  <Row className='w-100 p-2'>
    <Col sm={8}>
      <Link to={not.for_shopkeeper ? `/shop/${not.shop.id}/orders_tracking` : '/profile/my_cmds'}>
        <p className={`cardlinks ${!not.read ? "newNot cardlinks-black" : "cardlinks-green" }`}>
          { not.message }
        </p>
      </Link>
    </Col>
    <Col sm={2} className='text-center'>
      { !not.read && (
        <p className="vu_button" onClick={() => handleUpdate(updateNots)}>Vu</p>
      )}
    </Col>
    <Col sm={2} className='text-center'>
      <img
        src={Bin}
        alt="Bin"
        className="bin"
        style={{ height: 20 }}
        onClick={() => handleDelete(updateNots)}
      />
    </Col>
  </Row>
  )
}

export default NotCard;