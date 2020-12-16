/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import OrderDetails from './OrderDetails';

const OrdersByShop = ({ group }) => {
  const [shopName, ordersList] = group;

  return (
    <Card className="mt-2">
      <Card.Header className="text-white" style={{ backgroundColor: '#45B5AA' }}>
        {`Vos commandes chez ${shopName}`}
      </Card.Header>
      <ListGroup variant="flush">
        {
          ordersList.map((order, indx) => (
            <ListGroup.Item key={indx}>
              <OrderDetails order={order} />
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </Card>
  );
};

export default OrdersByShop;
