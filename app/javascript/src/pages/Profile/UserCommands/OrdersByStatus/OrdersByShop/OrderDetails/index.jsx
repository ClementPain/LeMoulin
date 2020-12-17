/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import { Table } from 'react-bootstrap';

import { find } from '../../../../../../api/api-manager';
import dateHandler from '../../../../../../tools/dateHandler';

const { formatDate } = dateHandler;

const OrderDetails = ({ order }) => {
  const { id: orderNum, created_at: orderDate } = order;
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
    ) => acc + item.price * quantity,
    0);

    setTotalTTC(result);
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
    <>
      <h5 className="text-center">{`Commande N° ${orderNum} du ${formatDate(orderDate)} `}</h5>
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
                <td>{item.name}</td>
                <td>{quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <h6 className="text-right">{`Total TTC ${totalTTC?.toFixed(2)} €`}</h6>
    </>
  );
};

export default OrderDetails;
