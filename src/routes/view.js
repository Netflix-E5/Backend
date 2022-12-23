const express = require('express');
const router = express.Router();
const viewController = require('../main/view/controller.js');
const ViewController = new viewController


//router.get('/movies/view', viewController.viewMovie); // 컨텐츠 상세 정보 조회 API

module.exports = router;