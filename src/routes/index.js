const express = require('express');
const router = express.Router();

const episodeRouter = require('../routes/episode.js');
const contentsRouter = require('../routes/contents.js');
const pickRouter = require('../routes/pick.js');
const userRouter = require('../routes/user.js');
const viewRouter = require('../routes/view.js');

router.use('/episode', episodeRouter);
router.use('/contents', contentsRouter);
router.use('/pick', pickRouter);
router.use('/user', userRouter);
router.use('/view', viewRouter);

module.exports = router;
