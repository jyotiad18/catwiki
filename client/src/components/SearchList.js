import React from 'react';
import { Link } from 'react-router-dom';


function SearchList({ searchList = [] }) {	
	return (
		<div className="search__list">	
			{
				searchList.map((breed, i) => (	
					<Link key={i}
						to={`/breed-details/${breed.name}`}
						className="search__link"
					>
						{breed.name}
					</Link>					
				))	
			}	
		</div>
	)
}

export default SearchList;