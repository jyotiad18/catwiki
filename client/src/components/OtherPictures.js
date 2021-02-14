import React, { useState, useEffect } from 'react';
import axios from '../axios.js';

function OtherPictures({ id }) {
	const [pictures, setPictures] = useState([]);	
	
	useEffect(() => {
		async function getPictures()
		{
			const url = `/breeds/${id}/images`;
     		 const resp = await axios.get(url, {
        		headers: { 'Content-Type': 'application/json' }
     		 });
			setPictures(resp.data.data);
		}
		getPictures();
	}, [ id ])
	return (
		<div className="otherPictures">
			<h6>Other photos</h6> 			
			<div className="pictures">				
				{
					pictures.length > 0 && pictures.map((picture, i) => (
						<img key={i} src={picture.url} alt="" />
					))
				}					
			 </div>				
		</div>
	)
}

export default OtherPictures;
