import React from 'react';
import Header from '../components/Header';
import Discover from '../components/Discover';
import CatInfo from '../components/CatInfo';
import SearchList from '../components/SearchList';
import { useSelector } from 'react-redux';
import { selectBreeds } from '../redux/reducers/breedSlice';

function Home({ totalBreed }) {
	const { searchList } = useSelector(selectBreeds);
	return (
		<div className="home">
			{
				searchList.length > 0 ?
					<SearchList searchList={searchList}/>
					: null
			}
			<Header />
			<Discover totalBreed={totalBreed}/>			
			<CatInfo />			
		</div>
	)
}

export default Home;
