const express = require('express');
const router = express.Router();
const ratingController = require('../main/rating/controller.js');
const RatingController = new ratingController


// router.post('/signup', UserController.signUp); // 회원 생성


module.exports = router;