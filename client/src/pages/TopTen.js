import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cat from '../components/Cat';
import { selectBreeds} from '../redux/reducers/breedSlice';

function TopTen() {
	const [pageNumber, setPageNumber] = useState(1);
	const [perPage] = useState(10);
	const [topBreedList, setTopBreedList] = useState([]);	
	const { breedList } = useSelector(selectBreeds);	

	useEffect(() => {		
		function setTopBreeds() {
			const totalItems = pageNumber * perPage;
			setTopBreedList(breedList.slice(0, totalItems) || []);
		}
		setTopBreeds();
	}, [pageNumber, perPage, breedList])

	const onLoadMoreHandler = () => {
		setPageNumber(pageNumber + 1);
	}
	
	return (
		<div className="topTen">
			<h1>Top 10 most searched breeds</h1>
			{
				topBreedList && topBreedList.map((breed, i) => (
					<Cat key={i}
						id={i}
						title={breed.name}
						photourl={breed.image?.url}
						description={breed.description}
				    />
				))
			}
			<button className="btn__loadMore" onClick={(pageNumber * perPage < breedList.length) && onLoadMoreHandler}>Load More</button>
		</div>
	)
}

export default TopTen;
