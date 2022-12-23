const express = require('express');
const router = express.Router();
const pickController = require('../main/pick/controller.js');
const PickController = new pickController


// router.post('/signup', UserController.signUp); // 회원 생성


module.exports = PickController;