import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CatDetails from '../components/CatDetails';
import OtherPictures from '../components/OtherPictures';
import { getBreedByName, selectBreeds } from '../redux/reducers/breedSlice';

function BreedDetail() {
	
	const { breedname } = useParams();
	const dispatch = useDispatch();
	const { breedDetail } = useSelector(selectBreeds);
	
	useEffect(() => {
		function getBreedDetail() {
			dispatch(getBreedByName({				
					breedname: breedname				
			}))		
		}		
		getBreedDetail();
	}, [ dispatch, breedname ]);
	
	return (
		<div className="breedDetail">
			<CatDetails
				imageUrl={breedDetail?.image.url}
				name={breedDetail?.name}
				description={breedDetail?.description}
				temperament={breedDetail?.temperament}
				origin={breedDetail?.origin}
				life_span={breedDetail?.life_span}
				adaptability={breedDetail?.adaptability}
				affection_level={breedDetail?.affection_level}
				child_friendly={breedDetail?.child_friendly}
				grooming={breedDetail?.grooming}
				intelligence={breedDetail?.intelligence}
				health_issues={breedDetail?.health_issues}
				social_needs={breedDetail?.social_needs}
				stranger_friendly={breedDetail?.stranger_friendly}				
			/>
			<OtherPictures id={breedDetail?.id}/>
		</div>
	)
}

export default BreedDetail;
