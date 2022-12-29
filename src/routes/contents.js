const express = require('express');

const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware.js')
const ContentsController = require('../main/contents/contents.controller.js');
const contentsController = new ContentsController

router.get('/genre',authMiddleware,contentsController.getGenre);
router.get('/rating',authMiddleware,contentsController.getRating);
router.get('/:contentsId', authMiddleware,contentsController.getOneMovie); // 컨텐츠 상세 정보 조회 API

module.exports = router;