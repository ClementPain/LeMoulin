/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';

import UserAuthInfosUpdater from '../UserAuthInfosUpdater';
import UserPersoInfosUpdater from '../UserPersoInfosUpdater';
import UserCommands from '../UserCommands';
import UserCart from '../UserCart';

const matchedTabs = {
  auth_infos: {
    page: <UserAuthInfosUpdater />,
  },
  perso_infos: {
    page: <UserPersoInfosUpdater />,
  },
  my_cmds: {
    page: <UserCommands />,
  },
  my_cart: {
    page: <UserCart />,
  },
};

const Panel = () => {
  const { selectedTab } = useParams();
  const { page } = matchedTabs[selectedTab];

  return (
    <>
      { page }
    </>
  );
};

export default Panel;
