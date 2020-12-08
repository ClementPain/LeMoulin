import React from 'react'
import bgimage from '../../../../assets/images/commerces-de-proximite-lille.jpg'


const Jumborton = ()  => (

<div className="jumbotron text-center" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' , backgroundPosition: 'center center'}}>
  <h1 className="display-3">LE MOULIN</h1>
  <p className="lead text-white">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <div className="my-4">
  <p className="text-white">It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
</div>
)

export default Jumborton;