const express = require('express');

const router = express.Router();

const ContentsController = require('../main/contents/contents.controller');
const contentsController = new ContentsController

router.get('/genre',contentsController.getGenre);
router.get('/rating',contentsController.getRating);
router.get('/:contentsId', contentsController.getOneMovie); // 컨텐츠 상세 정보 조회 API

module.exports = router;