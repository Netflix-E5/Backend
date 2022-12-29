const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware.js');
const authLoginMiddleware = require('../middlewares/auth-logInUser.middleware.js');
const UserController = require('../main/user/user.controller.js');
const updateToken = require('../middlewares/updateToken.js');
const userController = new UserController();


router.post('/signup', authLoginMiddleware,userController.createUser); // 회원 생성
router.post('/login',authLoginMiddleware,userController.loginUser);
router.put('/getToken',updateToken);

module.exports = router;
