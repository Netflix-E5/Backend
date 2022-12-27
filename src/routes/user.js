const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware.js');
const UserController = require('../main/user/user.controller.js');
const userController = new UserController();


router.post('/signup', userController.createUser); // 회원 생성
router.post('/login',userController.loginUser);
router.get('/test',authMiddleware,userController.test)


module.exports = router;
