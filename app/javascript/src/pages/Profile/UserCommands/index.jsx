import React, { useContext, useEffect, useState } from 'react';

import CurrentUserContext from '../context';
import { find } from '../../../api/api-manager';

const UserCommands = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [currentUserOrders, setCurrentUserOrders] = useState();

  const getCurrentUserCommands = () => {
    if (!currentUser) {
      return;
    }

    find('orders', {
      onSuccess: (orders) => {
        console.log(orders);
        setCurrentUserOrders(orders);
      },
    });
  };

  useEffect(
    getCurrentUserCommands,
    [currentUser],
  );

  return (
    <div>UserCommands</div>
  );
};

export default UserCommands;
