const mongoose 	= require('mongoose');
const configs	= require('../config/configs');

const { 
	BookModel, 
	CommentModel, 
	UserModel
 }	= require('../db/models');
const db_config = configs.db_config;

const url		= 'mongodb://localhost:27017/ClickBankDB' 

mongoose.connect(url, db_config)
	.then(db => {console.log('db connected')})
	.catch(err => {console.log(err)});



