/* eslint-disable react/prop-types */
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import avatar from './avatar.png';

const Avatar = ({ user }) => (
  <div>
    <img src={avatar} alt="Avatar" className="avatar" />
    {user && (user.profile.first_name || user.profile.last_name) && (
      <Card className="mb-2 text-center">
        <ListGroup variant="flush">
          <ListGroup.Item>
            {user.profile.first_name}
            {' '}
            {user.profile.last_name}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    )}
  </div>
);

export default Avatar;
