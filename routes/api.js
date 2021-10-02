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

const authorization = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = data.id;
    req.userRole = data.role;
    return next();
  } catch {
    return res.sendStatus(403);
  }
};


router.get('/login', (req,res) => {
	var secret_key = process.env.SECRET_KEY;
	var user_token = req.headers.cookie;

	if (user_token){
		res.json({'data':'you are already logged in'});
		res.redirect('homepage');
	}else{
		const payload = { check:true };
		const access_token = jwt.sign(
			payload, 
			secret_key, 
			{ expiresIn: 1440}
		);

		var config_cookie 	= {
			maxAge: 900000,
			secure: true
		}
		res.cookie('access_token', access_token, config_cookie);
		res.redirect('/homepage')
	}
})

router.get('/register', (req,res) => {
	const user_token = process.env.SECRET_KEY;

	if(user_token){
		redirect('/homepage');
	}

	const payload = { check:true };
	const token = jwt.sign(
		payload, 
		secret_key, 
		{ expiresIn: 1440}
	);

	var access_token = token;
	res.cookie('access_token', access_token, {maxAge: 10800});
	res.redirect('/homepage');
})

module.exports = router;