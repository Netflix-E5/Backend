const express = require('express');
const router = express.Router();
const userRouter = require('./user.js');
const contentsRouter = require('./contents.js');
const viewRouter = require('./view');
const episodeRouter = require('./episode.js');
const pickRouter = require('./pick.js');

router.use('/users', userRouter);
router.use('/episode', episodeRouter);
router.use('/pick', pickRouter);
router.use('/contents', contentsRouter);
router.use('/view', viewRouter);

module.exports = router;
