const express = require('express');
const router = express.Router();
const ViewController = require('../main/view/view.controller.js');
const viewController = new ViewController();
const authMiddleware = require('../middlewares/auth.middleware.js')

router.post('/:contentsId/views',authMiddleware, viewController.clickView); // 컨텐츠 조회 레코딩 API
router.get('/views',authMiddleware, viewController.viewContents); // 컨텐츠 랭킹 조회 API

module.exports = router;
