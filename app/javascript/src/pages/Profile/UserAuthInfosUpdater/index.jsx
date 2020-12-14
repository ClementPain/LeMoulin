/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';

import {
  Row, Col,
} from 'react-bootstrap';

import UpdateUserAuthInfosForm from './UpdateUserAuthInfosForm';

const UserAuthInfosUpdater = () => (
  <Row>
    <Col md={{ span: 6, offset: 3 }}>
      <UpdateUserAuthInfosForm />
    </Col>
  </Row>
);

export default UserAuthInfosUpdater;
