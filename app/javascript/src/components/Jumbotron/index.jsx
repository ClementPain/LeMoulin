import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bgimage from './BackgroundImage.jpg';

const Hero = () => (

  <Jumbotron fluid style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
    <h1 className="display-4 text-center">LE MOULIN</h1>
    <p className="lead text-white text-center">L'application a pour but de mettre en relation des commerces de proximité pour qu'ils puissent facilement organiser leur click & collect et gagner en visibilité auprès des clients.</p>
    <div className="my-4 text-center">
      <Button as={Link} to="/aboutus">Savoir plus</Button>
    </div>
  </Jumbotron>
);

export default Hero;
