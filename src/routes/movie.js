const express = require('express');

const router = express.Router();

const MovieController = require('../main/movie/controller');
const movieController = new MovieController

router.get('/:movieId', movieController.getOneMovie); // 컨텐츠 상세 정보 조회 API

module.exports = router;
