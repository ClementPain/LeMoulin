import React from 'react';
import bgimage from '../../../assets/images/Formation-Web.jpg'


const Jumborton = ()  => (

	<div className="jumbotron text-center" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' , backgroundPosition: 'center center'}}>
			<h3 className="display-5 text-white" >Form-Yourself</h3>
			<p className="lead text-white">FormYourself is a training sales company. Different companies buy a package from FormYourself. Thus, their employees can register for all the training they wish, without limit.</p>
			<div className="my-4 text-white">
			<p>To see more details about inscriptions and training formulas </p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
			</p>
			</div>
		</div>

)

export default Jumborton