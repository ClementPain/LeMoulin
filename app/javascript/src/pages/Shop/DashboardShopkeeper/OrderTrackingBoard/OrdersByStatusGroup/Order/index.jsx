/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Card, Table, Button, Row, Col,
} from 'react-bootstrap';

import { find, update } from '../../../../../../api/api-manager';
import dateHandler from '../../../../../../tools/dateHandler';

const { formatDate } = dateHandler;

const translation = {
  prepared: 'préparée',
  validated: 'validée',
};

const Order = ({ order, nextStatus, reGetOrders }) => {
  const { id: orderNum, created_at: orderDate, customer } = order;
  const { last_name, first_name } = customer.profile;

  const [orderDetails, setOrderDetails] = useState(null);
  const [totalTTC, setTotalTTC] = useState(null);

  const findOrderDetail = () => {
    find(`orders/${order.id}/order_items`, {
      authRequired: true,
      onSuccess: (result) => { setOrderDetails(result); },
    });
  };

  const computeTotalTTC = () => {
    const result = orderDetails?.reduce((
      acc, { item, quantity },
    ) => acc + item?.price * quantity,
    0);

    setTotalTTC(result);
  };

  const handleOnClick = (status) => {
    update(`orders/${order.id}`, {
      data: {
        status,
      },
      onSuccess: () => { reGetOrders(); },
    });
  };

  useEffect(
    findOrderDetail,
    [order],
  );

  useEffect(
    computeTotalTTC,
    [orderDetails],
  );

  return (
    <Card>
      <Card.Header className="bg-primary text-white px-4">
        <h6
          className="text-center"
        >
          {`Commande N° ${orderNum} du ${formatDate(orderDate)} pour Mme. / M. ${last_name} ${first_name}`}
        </h6>
      </Card.Header>
      <Card.Body>
        {
          nextStatus && (
          <Row className="mb-2">
            <Col md={{ span: 3, offset: 3 }}>
              <Button
                variant="success"
                size="sm"
                onClick={() => handleOnClick(nextStatus)}
              >
                Passer le statut à
                {' '}
                {translation[nextStatus]}
              </Button>

            </Col>
            <Col md={3}>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleOnClick('canceled')}
              >
                Annuler cette commande
              </Button>
            </Col>
          </Row>
          )
        }
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Article</th>
              <th>Quantité</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {
              orderDetails?.map(({ item, quantity }, indx) => (
                <tr key={indx}>
                  <td>{indx + 1}</td>
                  <td>{item?.name}</td>
                  <td>{quantity}</td>
                  <td>{item?.price}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        <h6 className="text-right">{`Total TTC ${totalTTC?.toFixed(2)} €`}</h6>
      </Card.Body>
    </Card>
  );
};

export default Order;
