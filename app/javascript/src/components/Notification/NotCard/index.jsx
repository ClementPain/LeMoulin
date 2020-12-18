import React from 'react';

import { Row, Col } from 'react-bootstrap';
import Bin from './delete.png'

import { update, remove } from '../../../api/api-manager';

const NotCard = ({ not, updateList }) => {
  const handleDelete = () => {
    remove(`notifications/${not.id}`);
    updateList({});
  }

  const handleUpdate = () => {
    update(`notifications/${not.id}`);
    updateList({});
  }

  return (
  <Row className='w-100 p-2'>
    <Col sm={8}>
      <p>{ not.message }</p>
    </Col>
    <Col sm={2} className='text-center'>
      <p onClick={() => handleUpdate()}>Vu</p>
    </Col>
    <Col sm={2} className='text-center'>
      <img
        src={Bin}
        alt="Bin"
        className="bin"
        style={{ height: 20 }}
        onClick={() => handleDelete()}
      />
    </Col>
  </Row>
  )
}

export default NotCard;