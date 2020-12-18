import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Switch from 'react-bootstrap/esm/Switch';
import { Route, useRouteMatch } from 'react-router-dom';

import {
  Container, Row, Col, Card, Alert
} from 'react-bootstrap';

import CurrentUserContext from './context';
import { find } from '../../api/api-manager';

import Avatar from './Avatar';
import DashboardNav from './DashboardNav';
import Panel from './Panel';
import UserCart from './UserCart';

const Profile = () => {
  const { path, url } = useRouteMatch();
  const { currentUserId } = useSelector((state) => state);
  const [currentUser, setCurrentUser] = useState(null);
  const [alert, setAlert] = useState(false);

  const updateCurrentUser = (callback) => {
    if (!currentUserId) {
      return;
    }

    find(`users/${currentUserId}`, {
      authRequired: true,
      onSuccess: (user) => {
        setCurrentUser(user);
        if (callback) {
          callback(user);
        }
      },
    });
  };

  useEffect(
    updateCurrentUser,
    [currentUserId],
  );

  const showAlert = () => {
    setAlert(true);
    window.setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  if (!currentUser) return <p>Chargement...</p>;

  return (
    <CurrentUserContext.Provider value={{
      currentUser,
      updateCurrentUser,
    }}
    >
      <Container fluid className="mt-3 pt-3">
        <Alert variant="success" show={alert}>
          Votre commande est en cours de préparation
        </Alert>
        <Row>
          <Col md={3} className="mb-3 mb-md-0 pl-3">
            <Avatar />
          </Col>
          <Col md={9}>
            <DashboardNav url={url} />
            <Card className="mt-2">
              <Card.Body>
                <Switch style={{ padding: 0 }}>
                  <Route exact path={path}>
                    <UserCart showOrderAlert={showAlert} />
                  </Route>
                  <Route path={`${path}/:selectedTab`}>
                    <Panel />
                  </Route>
                </Switch>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </CurrentUserContext.Provider>
  );
};

export default Profile;
