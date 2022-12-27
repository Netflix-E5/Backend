const express = require('express');
const router = express.Router();
const UserRouter = require('./user.js');

const episodeRouter = require('../routes/episode.js');
const contentsRouter = require('../routes/contents.js');
const pickRouter = require('../routes/pick.js');
const viewRouter = require('../routes/view.js');

router.use('/episode', episodeRouter);
router.use('/contents', contentsRouter);
router.use('/pick', pickRouter);
router.use('/view', viewRouter);
router.use('/users', UserRouter);



module.exports = router;
