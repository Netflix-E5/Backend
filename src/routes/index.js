const express = require('express');
const router = express.Router();
const userRouter = require('./user.js');
const contentsRouter = require('./contents.js');
const viewRouter = require('./view');

router.use('/users', userRouter);
router.use('/contents', contentsRouter);
router.use('/view', viewRouter);


module.exports = router;
