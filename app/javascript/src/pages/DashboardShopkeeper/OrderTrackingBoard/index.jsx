/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Card, Container, Accordion } from 'react-bootstrap';

import { find } from '../../../api/api-manager';
import OrdersByStatusGroup from './OrdersByStatusGroup';

const OrderTrackingBoard = () => {
  const { shop_id } = useParams();
  const [shopOrders, setShopOrders] = useState(null);

  const getShopOrders = () => {
    find(`shops/${shop_id}/orders`, {
      onSuccess: (orders) => {
        setShopOrders(orders);
      },
    });
  };

  useEffect(
    getShopOrders,
    [],
  );

  return (
    <Container fluid className="mt-3 pt-3">
      <Card>
        <Card.Header className="text-white px-4 h5" style={{ backgroundColor: '#45B5AA' }}>
          Voici la liste de toutes les commandes aux près de votre boutique triées par status
        </Card.Header>
        <Card.Body>
          <Accordion defaultActiveKey="0" style={{ width: '100%', height: 500 }} className="overflow-auto">
            {
              [
                'in_progress',
                'prepared',
                'validated',
                'canceled',
              ].map((status, indx) => (
                <OrdersByStatusGroup
                  key={indx}
                  id={`${indx}`}
                  status={status}
                  orders={shopOrders}
                  reGetOrders={getShopOrders}
                />
              ))
            }
          </Accordion>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OrderTrackingBoard;
