const express = require('express');
const router = express.Router();
const genreController = require('../main/genre/controller.js');
const GenreController = new genreController


// router.post('/signup', UserController.signUp); // 회원 생성


module.exports = GenreController;