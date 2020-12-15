import React from 'react';

import { Row, Col } from 'react-bootstrap';

import UpdateUserPersoInfosForm from './UpdateUserPersoInfosForm';

const UserPersoInfosUpdater = () => (
  <Row>
    <Col md={{ span: 6, offset: 3 }}>
      <UpdateUserPersoInfosForm />
    </Col>
  </Row>
);

export default UserPersoInfosUpdater;
