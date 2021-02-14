import React from 'react'

function DetailOption({ title, desc, range }) {		
	return (
		<div className="detailOption">
			<h3>{title}: </h3>
			<h4>{desc}</h4>
			{
				range ? 
				<div className="detailOption__range">
					{
							[1, 2, 3, 4, 5].map((mp, i) => (
								range >= mp ?  <span key={i} className="range__dark"></span> : <span key={i} className="range__light"></span>								
							))
					}
					</div>
				: null
			}
		</div>
	)
}

export default DetailOption
