/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LinkerButton = ({ label, to }) => (
  <Button as={Link} to={to} className="btn btn_success_sass" variant="outline-success">
    {label}
  </Button>

);

export default LinkerButton;
