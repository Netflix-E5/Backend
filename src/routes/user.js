const express = require('express');
const router = express.Router();
//const authMiddleware = require('../middlewares/auth-middleware.js')
const userController = require('../main/user/controller.js');
const UserController = new userController


// router.post('/signup', UserController.signUp); // 회원 생성


module.exports = router;