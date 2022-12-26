const express = require('express');
const router = express.Router();
const EpisodeController = require('../main/episode/episode.controller.js');
const episodeController = new EpisodeController();
//

router.get('/:contentsId/season/:season', episodeController.getAllEpisodes);

module.exports = router;
