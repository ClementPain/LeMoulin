import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { find } from '../../api/api-manager';

const PrivateRoute = ({ path, component, shop_id }) => {
  const { isAuthenticated, currentUserId } = useSelector((state) => state);
  const [shop, setShop] = useState(null);

  if (!isAuthenticated) return <Redirect to={{ pathname: '/login', state: { alertPrivateRoute: true } }} />;

  if (!shop_id) return <Route path={path} component={component} />;

  if (shop_id && isAuthenticated) {
    find(`shops/${id}`, {
      authRequired: true,
      onSuccess: (result) => {
        setShop(result);
        if (shop.shopkeeper_id !== currentUserId) {
          return <Redirect to={{ pathname: '/', state: { alertPrivateRoute: true } }} />;
        }
        return <Route path={path} component={component} />;
      },
    });
  }
};

export default PrivateRoute;
