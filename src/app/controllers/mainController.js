const modelJokes = require('../models/jokesModel.js'); 
const modelMemes = require('../models/memesModel.js');

exports.bytype = (req, res) => {
	
	res.render('root/index');
}

exports.byid = async (req, res) => {
	res.render('root/index', {joke: await modelJokes.getByType()});
}

exports.index = async (req, res) => {
	res.render('root/index', {joke: await modelJokes.getRandom()});
}

exports.meme = async (req, res) => {
	res.render('root/memes/index', {meme: await modelMemes.getRandom()});
}
exports.memeByType = async (req, res) => {
	res.render('root/index', {meme: await modelMemes.getByType()});
}