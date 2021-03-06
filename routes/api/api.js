const express 	= require('express');
const jwt 		= require('jsonwebtoken');

const {
	NotExistsError,
	Api404Error
} = require('../../utils/errors')

const {
	onData
} = require('./aux_calls')

const router 	= express.Router();

const {
	encrypt,
	decrypt
} = require('../utils');

const {
	BookModel,
	UserModel,
	CommentModel
} = require('../../db/models');

const DescriptionViewList = (req,res) => {

	var access_token = req.headers.cookie;
	var referer 	 = req.headers.referer;

	if(!access_token){
		res.json({'msg':'Here is not access token'})
		res.redirect(referer)
		res.end()
	}

	res.json({'data':'example'});
}

const DescriptionViewRetrieve = (req,res) => {
	var access_token = req.headers.cookie;
	var referer 	 = req.headers.referer;
	var desc_id 	 = req.params.id

	try{
		if(!access_token){
			res.redirect(referer);
			throw new Api404Error('token not found')
		}else{
			BookModel.find({'id':desc_id}, onData)
		}
	}catch(err){
		console.log(err.name)
		res.end()
	}
	
	
	const {id}		= req.params;
	res.json({'data':'example'});
}

const LogoutView = (req,res) => {
	var secret_key 	 = process.env.SECRET_KEY;
	var access_token = req.headers.cookie;
	var referer 	 = req.headers.referer;

	if (!access_token){
		res.redirect(referer + 'homepage');
	}

	res.clearCookie('access_token');
	res.redirect(referer + 'homepage');
}

const LoginView = async (req,res) => {
	var secret_key 	 = process.env.SECRET_KEY;
	var access_token = req.headers.cookie;
	var referer 	 = req.headers.referer;

	var config_cookie 	= {
				maxAge: 900000,
				secure: true
				}

	if (access_token == true){
		res.cookie('message','you are alredy logged in')
		res.redirect(referer + "homepage").status(200);
	}

	var { pass, name } = req.body;
	var result = UserModel.find({"name":name} ,(err,result) => {
		console.log('err: '+ err);
		var result = Object.keys(result).length;
		console.log('result: '+result);

		if(result == 1){
			const payload = { check:true };
			const new_access_token = jwt.sign(
				payload, 
				secret_key, 
				{ expiresIn: 1440}
			);
			res.cookie('message', 'successfully, logged in', config_cookie);
			res.cookie('access_token', new_access_token, config_cookie);
		}else{
			res.cookie('message', 'there is no one with that username',config_cookie);
		}
		
		res.redirect(referer + "homepage");

	})
}

const RegisterView =  (req,res) => {
	const secret_key   = process.env.SECRET_KEY;
	const referer 	   = req.headers.referer;
	const access_token = req.headers.cookie;

	var { pass, name, email } = req.body;
	var password = encrypt(pass)	

	if(access_token){
		res.cookie('message','you are already logged in, please close your session and try again then',{maxAge: 10800})
		res.redirect('back');
	}

	const result  = UserModel.find({"name":name})
	if (result == false){
		const payload = { check:true };
		const new_access_token = jwt.sign(
			payload, 
			secret_key, 
			{ expiresIn: 1440}
		);

		const new_user = new UserModel({
			password:password,
			name:name,
			email:email
		})

		new_user.save().then(() => console.log('user created'))

		res.cookie('access_token', new_access_token, {maxAge: 10800});
	}else{
		res.cookie('message', 'that user name already exists')
	}

	
	res.redirect('back');
}

const BookRegisterView = (req,res) => {
	const secret_key   = process.env.SECRET_KEY;
	const referer 	   = req.headers.referer;
	const access_token = req.headers.cookie;

	var { author, title, email } = req.body;
	if (access_token == 1){
		const new_book = new BookModel({
			author:author,
			title:title,
			email:email
		})

		new_book.save().then(() => console.log('book created'))
		res.cookie('message', 'creation success', {maxAge: 10800});
	}else{
		res.cookie('message', 'you must be authenticated', {maxAge: 10800})
	}


	res.redirect('back');
}

const UserViewRetrieve = (req,res) => {
	const user_id 	   = req.params.id 
	const referer 	   = req.headers.referer;
	const access_token = req.headers.cookie;

	try {
		if(!access_token){
			throw new Api404Error('token not found')
		}else{
			UserModel.find({'id':user_id}, onData)
		}
	}catch(err){
		res.json({'msg':err.name})
		res.redirect(referer + '/profile');
		res.end()
	}

}

module.exports = {
	LogoutView,
	LoginView,
	RegisterView,
	DescriptionViewRetrieve,
	DescriptionViewList,
	BookRegisterView,
	UserViewRetrieve,
}