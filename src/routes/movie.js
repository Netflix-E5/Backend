const express = require('express');

const router = express.Router();

const movieController = require('../main/movie/controller.js');
const MovieController = new movieController

// router.get('/:movieId', MovieController.getMovie); // 컨텐츠 상세 정보 조회 API

module.exports = router;
