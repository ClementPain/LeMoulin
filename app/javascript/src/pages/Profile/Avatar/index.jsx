/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';

import { Button, Card } from 'react-bootstrap';

import CurrentcurrentUserContext from '../context';
import { update } from '../../../api/api-manager';

const Avatar = () => {
  const { currentUser, updateCurrentUser } = useContext(CurrentcurrentUserContext);

  const uploadAvatar = async (e) => {
    const { files } = e.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'images_le_moulin');

    const response = await fetch('https://api.cloudinary.com/v1_1/dhtysnpro/image/upload', {
      method: 'post',
      body: data,
    });

    const file = await response.json();

    update(`profiles/${currentUser.profile.id}`, {
      data: {
        profile: {
          avatar: file.secure_url,
        },
      },
      onSuccess: () => {
        updateCurrentUser();
      },
    });
  };

  useEffect(
    updateCurrentUser,
    [],
  );

  return (
    <div>
      <Image publicId={currentUser?.profile.avatar} cloudName="dhtysnpro" className="avatar" crop="scale" />
      <div className="Upload">
        <input
          type="file"
          name="file"
          placeholder="Upload your avatar"
          onChange={uploadAvatar}
        />
      </div>
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
