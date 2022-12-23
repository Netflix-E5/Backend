const express = require('express');
const router = express.Router();
const episodeController = require('../main/episode/controller.js');
const EpisodeController = new episodeController


// router.post('/signup', UserController.signUp); // 회원 생성


module.exports = router;