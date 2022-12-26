const express = require('express');

const router = express.Router();

const ContentsController = require('../main/contents/contents.controller');
const contentsController = new ContentsController

router.get('/:contentsId', contentsController.getOneMovie); // 컨텐츠 상세 정보 조회 API

module.exports = router;
