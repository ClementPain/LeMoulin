/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Accordion, ListGroup } from 'react-bootstrap';

import Order from './Order';

const translation = {
  in_progress: 'en cours',
  prepared: 'préparées',
  validated: 'validées',
  canceled: 'annulées',
};

const OrdersByStatusGroup = ({ id, group, reGetOrders }) => {
  const [status, ordersByStatus] = group;

  const keys = Object.keys(translation);

  const nextStatus = (status === 'in_progress' || status === 'prepared')
    ? keys[keys.indexOf(status) + 1]
    : null;

  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={id} className="bg-primary text-white">
        Liste des commandes
        {' '}
        {translation[status]}
      </Accordion.Toggle>
      {
        ordersByStatus?.length === 0
          ? (
            <Card.Body>
              <Card.Text>
                {`Vous n' avez aucune commande ${translation[status]}`}
              </Card.Text>
            </Card.Body>
          )
          : (
            <Accordion.Collapse eventKey={id}>
              <Card.Body>
                <Card>

                  <ListGroup variant="flush">
                    {
                    ordersByStatus?.map((order, indx) => (
                      <ListGroup.Item key={indx}>
                        <Order
                          order={order}
                          nextStatus={nextStatus}
                          reGetOrders={reGetOrders}
                        />
                      </ListGroup.Item>
                    ))
                  }
                  </ListGroup>
                </Card>
              </Card.Body>
            </Accordion.Collapse>
          )
        }
    </Card>
  );
};

export default OrdersByStatusGroup;
