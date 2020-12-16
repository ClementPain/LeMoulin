/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import OrderDetail from './OrderDetail';

const OrdersByShoop = ({ group }) => {
  const [shopName, ordersList] = group;

  return (
    <Card className="mt-2">
      <Card.Header className="text-white" style={{ backgroundColor: '#45B5AA' }}>
        Vos commandes chez
        {' '}
        {shopName}
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          {
            ordersList.map((order, indx) => <OrderDetail key={indx} order={order} />)
          }
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default OrdersByShoop;
