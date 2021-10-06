const app = require("./server.js");

require('dotenv').config();
require('./db/conn');

const PORT      = process.env.PORT;
const localhost = process.env.LOCAL_HOST;
const redhost   = process.env.RED_HOST;

const port 		= PORT || 8000

app.listen(port,()=> {
	console.log('Listening on: ' + port)
})