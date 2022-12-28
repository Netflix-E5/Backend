const express = require('express');

const router = express.Router();

const ContentsController = require('../main/contents/contents.controller');
const contentsController = new ContentsController();

// const genreController = require('../main/contents/contents.controller');
// const GenreController = new genreController();

// const ratingController = require('../main/rating/contents.controller');
// const RatingController = new ratingController();

router.get('/:contentsId', contentsController.getOneMovie); // 컨텐츠 상세 정보 조회 API

module.exports = router;
