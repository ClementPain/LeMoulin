import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import UserAuthInfos from '../UserAuthInfos';
import UserPersoInfos from '../UserPersoInfos';
import UserCommands from '../UserCommands';
import UserCart from '../UserCart';

const matchedPanels = {
  auth_infos: {
    label: 'Informations de connexion',
    page: <UserAuthInfos />,
  },
  perso_infos: {
    label: 'Informations personnelles',
    page: <UserPersoInfos />,
  },
  my_cmds: {
    label: 'Mes commandes',
    page: <UserCommands />,
  },
  my_cart: {
    label: 'Mon panier',
    page: <UserCart />,
  },
  create_my_shop: {
    label: 'Créer ma boutique',
    page: <div />,
  },
};

const Panel = () => {
  const { selectedPanel } = useParams();
  const { label, page } = matchedPanels[selectedPanel];

  return (
    <Card>
      <Card.Header className="text-white bg-primary">{label}</Card.Header>
      <Card.Body>
        {page}
      </Card.Body>
    </Card>
  );
};

export default Panel;
