import React from 'react'
import DetailOption from './DetailOption';

function CatDetails({ imageUrl, name, description, temperament,
  origin, life_span, adaptability, affection_level,
  child_friendly, grooming, intelligence,
  health_issues, social_needs, stranger_friendly
  }) {  	
	return (
		<div className="catDetails">
         <img src={imageUrl} alt={name} />
			<div className="catDetail">
				<h1>{name}</h1>
				<h3>{description}</h3>
				<DetailOption title={"Temperament"} desc={temperament} />
				<DetailOption title={"Origin"} desc={origin} />
				<DetailOption title={"Life-span"} desc={life_span} />
				<DetailOption title={"Adaptability"} range={adaptability} />
				<DetailOption title={"Affection level"} range={affection_level} />
				<DetailOption title={"Child Friendly"} range={child_friendly} />
				<DetailOption title={"Grooming"} range={grooming} />
				<DetailOption title={"Intelligence"} range={intelligence} />
				<DetailOption title={"Health issues"} range={health_issues} />
				<DetailOption title={"Social needs"} range={social_needs} />
				<DetailOption title={"Stranger friendly"} range={stranger_friendly} />				
			</div>			
		</div>
	)
}

export default CatDetails;
