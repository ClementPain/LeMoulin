/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Button } from 'react-bootstrap';

import avatar from './avatar.png';

const Avatar = ({ user }) => (
  <div>
    <img src={avatar} alt="Avatar" className="avatar" />
    {
      user && (
        <Card className="text-center">
          <Card.Body>
            <Card.Title>
              {user.profile.first_name}
              {' '}
              {user.profile.last_name}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
            <Card.Text>{user.profile.address}</Card.Text>
            <Card.Text>{user.profile.zip_code}</Card.Text>
            <Button variant="primary">Créer ma boutique</Button>
          </Card.Body>
        </Card>
      )
    }
  </div>
);

export default Avatar;
