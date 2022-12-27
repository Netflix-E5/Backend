const express = require('express');
const router = express.Router();
const UserRouter = require('./user.js');
const episodeRouter = require('./episode.js');
const pickRouter = require('./pick.js');

router.use('/users', UserRouter);
router.use('/episode', episodeRouter);
router.use('/pick', pickRouter);

module.exports = router;
