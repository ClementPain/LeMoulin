/* eslint-disable react/no-array-index-key */
import React, { useContext, useEffect, useState } from 'react';

import { Accordion } from 'react-bootstrap';
import CurrentUserContext from '../context';
import { find } from '../../../api/api-manager';
import OrderByStatus from './OrdersByStatus';

const UserCommands = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [currentUserOrders, setCurrentUserOrders] = useState();

  const getCurrentUserCommands = () => {
    if (!currentUser) {
      return;
    }

    find('orders', {
      onSuccess: (orders) => {
        setCurrentUserOrders(orders);
      },
    });
  };

  useEffect(
    getCurrentUserCommands,
    [currentUser],
  );

  return (
    <Accordion defaultActiveKey="0">
      {
        [
          'in_progress',
          'prepared',
          'validated',
          'canceled',
        ].map((status, indx) => (
          <OrderByStatus
            key={indx}
            id={`${indx}`}
            status={status}
            orders={currentUserOrders}
          />
        ))
      }
    </Accordion>
  );
};

export default UserCommands;
