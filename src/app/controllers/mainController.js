const modelJokes = require('../models/jokesModel.js'); 
const modelMemes = require('../models/memesModel.js');

exports.bytype = async (req, res) => {
	res.render('root/jokes/byType', {joke: await modelJokes.getRandom(), type: 'general'});
}

exports.bytypePost = async (req, res) => {
	res.render('root/jokes/byType', {joke: await modelJokes.getByType(req.body.type), type: req.body.type});
}

exports.byid = async (req, res) => {
	res.render('root/jokes/byId', {joke: await modelJokes.getRandom(), id: 0});
}

exports.byidPost = async (req, res) => {
	console.log(req.body.id);
	res.render('root/jokes/byId', {joke: await modelJokes.getById(req.body.id), id: req.body.id});
}

exports.index = async (req, res) => {
	res.render('root/index', {joke: await modelJokes.getRandom()});
}

exports.meme = async (req, res) => {
	res.render('root/memes/index', {meme: await modelMemes.getRandom()});
}

exports.memeByType = async (req, res) => {
	res.render('root/memes/memeByType', {meme: await modelMemes.getRandom(), subreddit: 'idk'});
}

exports.memeByTypePost = async (req, res) => {
	console.log(req.body.type);
	res.render('root/memes/memeByType', {meme: await modelMemes.getByType(req.body.type), subreddit: req.body.type});
}