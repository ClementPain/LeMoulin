/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Card, Accordion } from 'react-bootstrap';
import OrdersByShop from './OrdersByShop';

const translation = {
  in_progress: 'en cours',
  prepared: 'préparées',
  validated: 'validées',
  canceled: 'annulées',
};

const OrderByStatus = ({ id, status, orders }) => {
  const [ordersGroupedByShop, setOrdersGroupedByShop] = useState(null);

  const filterOrdersByStatus = () => orders?.filter((order) => order.status === status);

  const groupOrdersByShop = () => {
    const filteredOrdersByStatus = filterOrdersByStatus();

    const group = filteredOrdersByStatus?.reduce((acc, order) => {
      acc[order.shop.name] = [...acc[order.shop.name] || [], order];
      return acc;
    }, {});

    setOrdersGroupedByShop(Object.entries(group || {}));
  };

  useEffect(
    () => { groupOrdersByShop(status); },
    [orders],
  );

  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={id} className="bg-primary text-white">
        Liste des commandes
        {' '}
        {translation[status]}
      </Accordion.Toggle>
      {
        ordersGroupedByShop?.length === 0
          ? (
            <Card.Body>
              <Card.Text>
                Vous n' avez aucune commande
                {' '}
                {translation[status]}
              </Card.Text>
            </Card.Body>
          )
          : (
            <Accordion.Collapse eventKey={id}>
              <Card.Body>
                {
                    ordersGroupedByShop?.map((shopOrdersGroup, indx) => (
                      <OrdersByShop
                        key={indx}
                        group={shopOrdersGroup}
                      />
                    ))
                  }
              </Card.Body>
            </Accordion.Collapse>
          )
        }
    </Card>
  );
};

export default OrderByStatus;
