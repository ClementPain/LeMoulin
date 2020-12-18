/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Card, Container, Accordion } from 'react-bootstrap';

import { find } from '../../../api/api-manager';
import OrdersByStatusGroup from './OrdersByStatusGroup';

const OrderTrackingBoard = () => {
  const { shop_id } = useParams();
  const [shopOrdersGroupedByStatus, setShopOrdersGroupedByStatus] = useState(null);

  const groupOrdersByStatus = (orders) => {
    const groups = orders?.reduce((acc, order) => {
      acc[order.status] = [...acc[order.status] || [], order];
      return acc;
    }, {});

    setShopOrdersGroupedByStatus(Object.entries(groups || {}));
  };

  const getShopOrders = () => {
    find(`shops/${shop_id}/orders`, {
      onSuccess: (orders) => {
        groupOrdersByStatus(orders);
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
              shopOrdersGroupedByStatus?.map((orderGroup, indx) => (
                <OrdersByStatusGroup
                  key={orderGroup[0]}
                  id={`${indx}`}
                  group={orderGroup}
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
