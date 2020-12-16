/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Card, Accordion } from 'react-bootstrap';
import OrdersByShoop from './OrdersByShop';

const translation = {
  in_progress: 'en cours',
  prepared: 'préparées',
  validated: 'validées',
  canceled: 'annulées',
};

const OrderByStatus = ({ id, status, orders }) => {
  const [ordersGroupedByShop, setOrdersGroupedByShop] = useState(null);

  const ordersFilter = (state) => {
    const filtredOrders = orders?.filter((order) => order.status === state);

    const group = filtredOrders?.reduce((acc, order) => {
      acc[order.shop.name] = [...acc[order.shop.name] || [], order];
      return acc;
    }, {});

    setOrdersGroupedByShop(Object.entries(group || {}));
  };

  useEffect(
    () => { ordersFilter(status); },
    [orders],
  );

  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={id} className="bg-primary text-white">
        Liste des commandes
        {' '}
        {translation[status]}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={id}>
        <Card.Body>
          {
            ordersGroupedByShop?.map((shopOrdersGroup, indx) => (
              <OrdersByShoop
                key={indx}
                group={shopOrdersGroup}
              />
            ))
          }
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default OrderByStatus;
