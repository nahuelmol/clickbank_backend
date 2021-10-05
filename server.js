const express 		  = require('express');
const bodyParser 	  = require('body-parser');
const cors 			    = require('cors');
const cookieParser  = require('cookie-parser');
const morgan        = require('morgan');

require('dotenv').config();
require('./db/conn');

const apiroutes   = require('./routes/api/urls');
const routes      = require('./routes/urls');

const PORT      = process.env.PORT;
const localhost = process.env.LOCAL_HOST;
const redhost   = process.env.RED_HOST;

const app 	= express();
const port 	= PORT || 8000;

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

app.listen(port,()=> {
	console.log('Listening on: ' + port)
})