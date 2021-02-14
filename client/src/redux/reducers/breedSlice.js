import { createSlice } from '@reduxjs/toolkit';

export const breedSlice = createSlice({
	name: 'breeds',
	initialState: {
		breedList: [],
		breedDetail: null,
		searchList: []
	},
	reducers: {
		getAllBreed: (state, action) => {
			state.breedList = action.payload.data;
		},
		getBreedByName: (state, action) => {
			const breedList = state.breedList;
			const breedDetail = breedList.filter(breed => breed.name === action.payload.breedname);
			state.breedDetail = breedDetail[0];	
			state.searchList = [];
		},
		getSearchList: (state, action) => {			
			const breedList = state.breedList;
			const searchInput = action.payload.breedname.toLowerCase();
			if (searchInput === '')
			{
				state.searchList = [];
			} 
			else {
				const searchList = breedList.filter(breed => breed.name.toLowerCase().startsWith(searchInput));
				state.searchList = searchList;
			}			
		}
  },
});

export const {
	getAllBreed,
	getBreedByName,
	getSearchList
} = breedSlice.actions;
	
export const selectBreeds = state => state.breeds;

export default breedSlice.reducer;