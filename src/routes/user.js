const express = require('express');
const router = express.Router();
const UserController = require('../main/user/controller.js');
const userController = new UserController();


router.post('/signup', userController.createUser); // 회원 생성
router.post('/login',userController.loginUser);


module.exports = router;
