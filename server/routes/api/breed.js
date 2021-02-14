const express = require('express');
const { 
	getAll,
	getByName,
	getImagesById
} = require('../../controllers/breed');
const router = express.Router({ mergeParams: true });

router.route('/')
	.get(getAll);	

router
	.route('/:breed_name/detail')
	.get(getByName);

router
	.route('/:id/images')
	.get(getImagesById)

module.exports = router;