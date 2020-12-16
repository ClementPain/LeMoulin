/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { find } from '../../../../../../api/api-manager';

const OrderDetail = ({ order }) => {
  const [orderDetail, setOrderDetail] = useState();

  const findOrderDetail = () => {
    find(`orders/${order.id}/order_items`, {
      authRequired: true,
      onSuccess: (result) => { setOrderDetail(result); },
    });
  };

  useEffect(
    findOrderDetail,
    [order],
  );

  return (
    <div>OrderDetail</div>
  );
};

export default OrderDetail;
