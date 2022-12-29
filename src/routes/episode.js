const express = require('express');
const router = express.Router();
const EpisodeController = require('../main/episode/episode.controller.js');
const episodeController = new EpisodeController();
const authMiddleware = require('../middlewares/auth.middleware.js')

router.get('/:contentsId/season/:season',authMiddleware, episodeController.getAllEpisodes);

module.exports = router;
