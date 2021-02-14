import React from 'react';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import BreedInfo from './BreedInfo';
import { selectBreeds } from '../redux/reducers/breedSlice';

function Discover({ totalBreed }) {
	const { breedList } = useSelector(selectBreeds);	
	return (
		<div className="discover">	
			<h4>Most Searched Breeds</h4>
			<div className="discover__line"></div>
			<div className="discover__info">
			<h2>{totalBreed}+ Breeds For you to discover</h2>
				<div className="info__showmore">
					<Link to="/topten" className="info__seemore">SEE MORE</Link>
					<ArrowRightAltIcon />
				</div>				
			</div>
			<div className="breeds__info">
					{
					breedList.slice(0, 4).map((breed, i) => (
						<Link key={i} to={`/breed-details/${breed.name}`}>
							<BreedInfo key={i} photoUrl={breed.image.url} title={breed.name}/>
						</Link>
					))
					}
				</div>
		</div>
	)
}

export default Discover;