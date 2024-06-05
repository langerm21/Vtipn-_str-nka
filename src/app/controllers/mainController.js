const modelJokes = require('../models/jokesModel.js'); 

exports.bytype = (req, res) => {
	
	res.render('root/index');
}

exports.byid = async (req, res) => {
	res.render('root/index', {joke: await modelJokes.getByType('general')});
}

exports.index = async (req, res) => {
	res.render('root/index', {joke: await modelJokes.getRandom()});
}