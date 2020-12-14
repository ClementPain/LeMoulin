/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Card, Button } from 'react-bootstrap';

import avatar from './avatar.png';
import CurrentcurrentUserContext from '../context';

const Avatar = () => {
  const { currentUser, updateCurrentUser } = useContext(CurrentcurrentUserContext);

  useEffect(
    updateCurrentUser,
    [],
  );

  return (
    <div>
      <img src={avatar} alt="Avatar" className="avatar" />
      {
        currentUser && (
          <Card className="text-center">
            <Card.Body>
              <Card.Title>
                {currentUser.profile.first_name}
                {' '}
                {currentUser.profile.last_name}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{currentUser.email}</Card.Subtitle>
              <Card.Text>{currentUser.profile.address}</Card.Text>
              <Card.Text>{currentUser.profile.zip_code}</Card.Text>
            </Card.Body>
          </Card>
        )
    }
      {
      currentUser && (
        currentUser.has_a_shop
          ? <Button as={Link} to={`/shop/${currentUser.shop.id}`} variant="primary" className="mt-3" block>Voir ma boutique</Button>
          : <Button as={Link} to="/create_my_shop" variant="primary" className="mt-3" block>Créer ma boutique</Button>
      )
    }
    </div>
  );
};

export default Avatar;
