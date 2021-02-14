import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { getSearchList } from '../redux/reducers/breedSlice';

function Search() {
	const dispatch = useDispatch();	
	const [searchInput, setSearchInput] = useState("");
	
	return (
		<div className="search">
			<div className="search__input">
				<input type="text"
					placeholder="Search by name"
					value={searchInput}
					onChange={(e) => {
						setSearchInput(e.target.value);
						dispatch(getSearchList({ breedname: e.target.value }));
					}}				
				/>			
				<SearchIcon />				
			</div>			
		</div>
	)
}

export default Search;