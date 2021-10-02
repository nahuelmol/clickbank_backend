const { Router } 	= require('express');
const routes 		= Router();

routes.get('/homepage', (req,res) => {
	const user_token = req.headers.cookie;

	if(!user_token){
		res.redirect('/api/login');
	}

	res.end('This is the homepage');
})

routes.get('/feed', (req,res) => {
	const user_token = req.headers.cookie;

	if(!user_token){
		res.redirect('/api/login');
	}

	res.end('this is the feed page');
})


module.exports = routes;