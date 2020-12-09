import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import bgimage from './BackgroundImage.jpg'
import Button from 'react-bootstrap/Button'


const Hero = ()  => (

<Jumbotron fluid>
<div className="bg  text-center" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' , backgroundPosition: 'center center'}}>
<h1 className="display-4">LE MOULIN</h1>
<p className="lead text-white">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
<div className="my-4">
  <Button variant="primary">Learn more</Button>
  </div>
  </div>
</Jumbotron>
)

export default Hero;

