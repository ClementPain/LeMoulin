/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
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
            </Card.Body>
          </Card>
        )
      }
    {
      user && (
        user.has_a_shop
          ? <Button as={Link} to={`/shop/${user.shop.id}`} variant="primary" className="mt-3" block>Voir ma boutique</Button>
          : <Button as={Link} to="/create_my_shop" variant="primary" className="mt-3" block>Créer ma boutique</Button>
      )
    }
  </div>
);

export default Avatar;
