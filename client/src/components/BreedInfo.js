import React from 'react';

function BreedInfo({ photoUrl, title}) {
	return (
		<div className="breedInfo">	
			<img src={photoUrl} alt={title} />
			<h3>{title}</h3>	
		</div>
	)
}

export default BreedInfo;