
const { setResponse } = require("../utils/Response");
const axios = require('axios');
const KEYS = "6f0dd18a-1150-487c-94c4-3d4c22ea56e3";
const baseUrl = "https://api.thecatapi.com/v1";

const config = {
	headers: {
		'Content-type': 'application/json',
		'x-api-key': KEYS
	}
}

const fetchData = (url, res) => {
	axios
		.get(`https://api.thecatapi.com/v1${url}`, config)
		.then((response) => {			
			return setResponse(res, 200, response.data || []);
		})
		.catch((error) => {			
			 setResponse(res, 400, null, error);
		})
}

// @desc      Get all breeds
// @route     GET /api/breeds
// @access    Public
exports.getAll = (req, res, next) => {	
	fetchData("/breeds", res);
}

// @desc      Get breeds by name
// @route     GET /api/breeds/:breed_name/detail
// @access    Public
exports.getByName = (req, res, next) => {	
	fetchData(`/breeds/search?q=${req.params.breed_name}`, res);
}

// @desc      Get breeds pictures by id
// @route     GET /api/breeds/:id/images
// @access    Public
exports.getImagesById = (req, res, next) => {		
	fetchData(`/images/search?breed_id=${req.params.id}&limit=9`, res);
}