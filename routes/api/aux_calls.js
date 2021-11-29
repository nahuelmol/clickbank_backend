const onData = (err, res) => {
		try{
			if(err){
				throw new NotExistsError('requiering data')
			}
		}catch(err){
			console.log(err.name)
			res.json({'data':'data'})
			res.end()
		}
	}

module.exports = {
	onData
}