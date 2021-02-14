import React from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';

function CatInfo() {
	return (
		<div className="catInfo">
			<div className="catInfo__left">
				<div className="catInfo__line"></div>
				<h2>Why should you have a cat?</h2>
				<h3>Having a cat around you can actually 
				trigger the release of calming chemicals 
				in your body which lower your stress and 
				anxiety leves
				</h3>
				<div className="catInfo__showmore">
					<span>READ MORE</span>
					<ArrowRightAltIcon />
				</div>	
			</div>
			<div className="catInfo__right">
				<img src={image2} alt="" />
				<img src={image3} alt="" />
				<img src={image1} alt="" />
			</div>
		</div>
	)
}

export default CatInfo;
