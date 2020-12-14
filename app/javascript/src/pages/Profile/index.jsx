import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Switch from 'react-bootstrap/esm/Switch';
import { Route, useRouteMatch } from 'react-router-dom';

import {
  Container, Row, Col, Card,
} from 'react-bootstrap';

import CurrentUserContext from './context';
import { find } from '../../api/api-manager';
import Avatar from './Avatar';
import DashboardNav from './DashboardNav';
import UserCommands from './UserCommands';
import Panel from './Panel';

const Profile = () => {
  const { path, url } = useRouteMatch();
  const { currentUserId } = useSelector((state) => state);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(
    () => {
      if (currentUserId) {
        find(`users/${currentUserId}`, {
          authRequired: true,
          onSuccess: (user) => setCurrentUser(user),
        });
      }
    },
    [currentUserId],
  );

  return (
    <CurrentUserContext.Provider value={{
      currentUser,
    }}
    >
      <Container fluid className="mt-3 pt-3">
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
                    <UserCommands />
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
