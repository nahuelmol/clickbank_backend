const mongoose 	= require('mongoose');
const configs	= require('../config/configs');

const db_config = configs.db_config

const url		= 'mongodb://localhost/' //add the port where mongoose is running

mongoose.connect(url,db_config);

console.log(db_config);