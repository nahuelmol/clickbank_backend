const express 		  = require('express');
const bodyParser 	  = require('body-parser');
const cors 			    = require('cors');
const cookieParser  = require('cookie-parser');
const morgan        = require('morgan');

const apiroutes   = require('./routes/api/urls');
const routes      = require('./routes/urls');

const app 	= express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/api',   apiroutes);
app.use(routes);

var allowedOrigins = ['http://localhost:8080'];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

if(module.parent.id == '.'){
	module.exports = app;
}else{
  module.exports = app;
}

