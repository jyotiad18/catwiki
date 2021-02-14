import React from 'react'
import { Link } from 'react-router-dom';

function Cat({id, title, photourl, description }) {
	return (
		<Link className="cat" to={`/breed-details/${title}`}>
			<div className="cat__image">
				<img src={photourl} alt={title} />
			</div>
			<div className="cat__desc">
				<h1>{id + 1}. {title}</h1>
				<h3>{description}</h3>
			</div>
		</Link>
	)
}

export default Cat;
