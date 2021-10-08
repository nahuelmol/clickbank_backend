const mongoose 	= require('mongoose');
const configs	= require('../config/configs');

var main = () =>{
	const { 
		BookModel, 
		CommentModel, 
		UserModel
 	}	= require('absolute').Import('db/models');

	const db_config = configs.db_config;

	const url		= 'mongodb://localhost:27017/ClickBankDB' 

	mongoose.connect(url, db_config)
		.then(db => {console.log('db connected')})
		.catch(err => {console.log(err)});
}


if(module.parent.id == '.'){
	main()
}


