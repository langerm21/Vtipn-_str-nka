const modelJokes = require('../models/jokesModel.js'); 

exports.bytype = (req, res) => {
	
	res.render('root/index');
}

exports.byid = (req, res) => {
	res.render('root/index');
}

exports.index = (req, res) => {
	res.render('root/index', {joke: modelJokes.getRandom()});
}