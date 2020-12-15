import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Icon1 from './Facebook.png';
import Icon2 from './Instagram.png';
import Icon3 from './Linkedin.png';

const Icons = () => (
  <Row>
    <Col className="text-center m-2">
      <a href="https://www.facebook.com">
        <Image src={Icon1} className="m-1" style={{ height: 35 }} alt="Icon1" />
      </a>
      <a href="https://www.instagram.com">
        <Image src={Icon2} className="m-1" style={{ height: 35 }} alt="Icon2" />
      </a>
      <a href="https://www.linkedin.com">
        <Image src={Icon3} className="m-1" style={{ height: 35 }} alt="Icon3" />
      </a>
    </Col>
  </Row>
);

export default Icons;
