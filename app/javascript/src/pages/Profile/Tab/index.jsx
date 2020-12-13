import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import UserAuthInfos from '../UserAuthInfos';
import UserPersoInfos from '../UserPersoInfos';
import UserCommands from '../UserCommands';
import UserCart from '../UserCart';

const matchedTabs = {
  auth_infos: {
    page: <UserAuthInfos />,
  },
  perso_infos: {
    page: <UserPersoInfos />,
  },
  my_cmds: {
    page: <UserCommands />,
  },
  my_cart: {
    page: <UserCart />,
  },
};

const Tab = () => {
  const { selectedTab } = useParams();
  const { page } = matchedTabs[selectedTab];

  return (
    <>
      { page }
    </>
  );
};

export default Tab;
