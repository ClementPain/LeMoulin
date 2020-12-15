/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import UserAuthInfosUpdater from '../UserAuthInfosUpdater';
import UserPersoInfosUpdater from '../UserPersoInfosUpdater';
import UserCommands from '../UserCommands';
import UserCart from '../UserCart';
import CurrentUserContext from '../context';

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
  const { currentUser } = useContext(CurrentUserContext);

  const { selectedTab } = useParams();
  const { page } = matchedTabs[selectedTab];

  return (
    <>
      { currentUser && page }
    </>
  );
};

export default Panel;
