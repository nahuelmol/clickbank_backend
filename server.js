const express 		  = require('express');
const bodyParser 	  = require('body-parser');
const cors 			    = require('cors');
const cookieParser  = require('cookie-parser');
const morgan        = require('morgan');
require('dotenv').config();

const apiroutes   = require('./routes/api');
const routes      = require('./routes/views');

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

var allowedOrigins = ['http://localhost:8080',
                      'http://yourapp.com'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

//app.use((req, res, next) => {
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//    if (req.method === 'OPTIONS') {
//        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//        return res.status(200).json({});
//    }
//    next();
//});

app.listen(port,()=> {
	console.log('Listening on: ' + port)
})