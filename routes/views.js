const { BookModel,
	CommentSchema,
	UserModel} = require('../db/models')

const { Api404Error } = require('../utils/errors')

const HomePageView = (req,res) => {

	const user_token = req.headers.cookie;

	try{
		if(!user_token){
			throw new Api404Error('token not found')
		}
	}catch(err){
		console.log(err.name)
		res.json({'msg':err.name})
		res.end('You need to be logged in');
	}

	res.end('This is the homepage');
}

const FeedView = (req,res) => {
	const user_token = req.headers.cookie;

	try{
		if(!user_token){
			throw new Api404Error('token not found')
			res.end('Do you want be logged in this site?');
		}
	
		User.find({}, function(err, users) {
			if(err){
	   	   		throw new Api404Error('users not found')
	   		}
	   		res.send({users: users});
		});
	}catch(err){
		res.json({'msg':err.name})
		res.end()
	}
	

	res.end('this is the feed page');
}

module.exports = {
	HomePageView,
	FeedView
}

