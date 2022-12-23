const express = require('express');
const router = express.Router();
const movieController = require('../main/movie/controller.js');
const MovieController = new movieController


// router.post('/signup', UserController.signUp); // 회원 생성

router.get('/:postId', postsController.getPostById);

module.exports = router;