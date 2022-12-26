const express = require('express');
const router = express.Router();
const ViewController = require('../main/view/controller.js');
const viewController = new ViewController


router.get('/', viewController.viewMovie); // 컨텐츠 상세 정보 조회 API

module.exports = router;