import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import bgimage from './BackgroundImage.jpg';

const Hero = () => (

  <Jumbotron fluid style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
    <h1 className="display-4 text-center">LE MOULIN</h1>
    <p className="lead text-white text-center">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <div className="my-4 text-center">
      <Button variant="primary">Learn more</Button>
    </div>
  </Jumbotron>
);

export default Hero;
