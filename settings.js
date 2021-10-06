
const ImportLocalModule = (mymodule) => {

	console.log(module);

	var modules = [
		'./config',
		'./db',
		'./routes'
	]

	for(var i = 0;i<modules.length;i++){
		try{
			require(modules[i] + '/index');
		}catch(e){
			console.log(modules[i] + " module does not exists");
		}
	}

	var path = './' + mymodule;
	console.log(mymodule);
	return require(path);
}

module.exports = ImportLocalModule;