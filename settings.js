
const ImportLocalModule = (mymodule) => {

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
	return require(path);
}

module.exports = ImportLocalModule;