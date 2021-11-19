const mongoose 	= require('mongoose');
const configs	= require('../config/configs');

var DB_HOST = 'localhost'
var DB_PORT = '27017'
var DB_NAME = 'ClickBankDB' 

var main = () =>{
	const { 
		BookModel, 
		CommentModel, 
		UserModel
 	}	= require('./models');

	const db_config = configs.db_config;

	const url		= 'mongodb://'+DB_HOST+':'+DB_PORT+'/'+DB_NAME 

	mongoose.connect(url, db_config)
		.then(db => {console.log('db connected')})
		.catch(err => {console.log(err)});
}


if(module.parent.id == '.'){
	main()
}


