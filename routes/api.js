const express 	= require('express')
const data 		= require('../db/models').data;

const router = express.Router();

const Books	= require('../db/models').BookModel;

router.get('/description', (req,res) => {
	var i = 1
	res.json(data);
});

router.get('/description/:id', (req,res) => {
	const {id}		= req.params;
	var i = 1;

	res.json(data[id]);
})

module.exports = router;