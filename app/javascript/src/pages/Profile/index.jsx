import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import Switch from 'react-bootstrap/esm/Switch';
import { Route, useRouteMatch } from 'react-router-dom';

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
          onError: (error) => console.log(error),
          onErrors: (errors) => console.log(errors),
          onSuccess: (result) => setCurrentUser(result),
        });
      }
    },
    [currentUserId],
  );

  return (
    <Container fluid className="mt-3 pt-3">
      <Row>
        <Col md={3} className="mb-3 mb-md-0 pl-3">
          <Avatar user={currentUser} />
          <DashboardNav url={url} />
        </Col>
        <Col md={9}>
          <Switch style={{ padding: 0 }}>
            <Route exact path={path}>
              <UserCommands />
            </Route>
            <Route path={`${path}/:selectedPanel`}>
              <Panel />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
