const mainRouter = require('express').Router();

const mainController = require('../controllers/mainController');

mainRouter.get('/bytype', mainController.bytype);
mainRouter.post('/bytype', mainController.bytypePost);
mainRouter.get('/byid', mainController.byid);
mainRouter.post('/byid', mainController.byidPost);
mainRouter.get('/meme', mainController.meme);
mainRouter.get('/memeByType', mainController.memeByType);
mainRouter.post('/memeByType', mainController.memeByTypePost);
mainRouter.get(['/', '/index'], mainController.index);

mainRouter.get('*', (req, res) => {
	res.send('Error 404');
});

// Exporting router for outside use
module.exports = mainRouter;