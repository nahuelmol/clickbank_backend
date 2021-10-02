const express 	= require('express');
const data 		= require('../db/models').data;
const jwt 		= require('jsonwebtoken');

const router = express.Router();

const Books	= require('../db/models').BookModel;

router.get('/description', (req,res) => {
	var i = 1
	res.json(data);
});

router.get('/description/:id', (req,res) => {
	const {id}		= req.params;
	res.json(data[id]);
})

router.get('/logout', (req,res) => {
	var secret_key 	 = process.env.SECRET_KEY;
	var access_token = req.headers.cookie;
	var referer 	 = req.headers.referer;

	if (!access_token){
		res.redirect(referer + 'homepage');
	}

	res.clearCookie('access_token');
	res.redirect(referer + 'homepage');
})

router.post('/login', (req,res) => {
	var secret_key 	 = process.env.SECRET_KEY;
	var access_token = req.headers.cookie;
	var referer 	 = req.headers.referer;

	var { pass, name } = req.body;

	if (access_token){
		res.redirect(referer + "homepage").status(200);
	}else{
		const payload = { check:true };
		const new_access_token = jwt.sign(
			payload, 
			secret_key, 
			{ expiresIn: 1440}
		);

		var config_cookie 	= {
			maxAge: 900000,
			secure: true
		}
		res.cookie('access_token', new_access_token, config_cookie);
		res.redirect(referer + "homepage");
	}
})

router.post('/register', (req,res) => {
	const secret_key   = process.env.SECRET_KEY;
	const referer 	   = req.headers.referer;
	const access_token = req.headers.cookie;

	var { pass, name } = req.body;

	if(access_token){
		redirect(referer + 'homepage');
	}

	const payload = { check:true };
	const new_access_token = jwt.sign(
		payload, 
		secret_key, 
		{ expiresIn: 1440}
	);

	res.cookie('access_token', new_access_token, {maxAge: 10800});
	res.redirect(referer + 'homepage');
})

module.exports = router;