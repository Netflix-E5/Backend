const express = require('express');
const router = express.Router();

const episodeRouter = require('../routes/episode.js');
const genreRouter = require('../routes/genre.js');
const contentsRouter = require('../routes/contents.js');
const pickRouter = require('../routes/pick.js');
const ratingRouter = require('../routes/rating.js');
const userRouter = require('../routes/user.js');
const viewRouter = require('../routes/view.js');

router.use('/episode', episodeRouter);
router.use('/genre', genreRouter);
router.use('/contents', contentsRouter);
router.use('/pick', pickRouter);
router.use('/rating', ratingRouter);
router.use('/user', userRouter);
router.use('/view', viewRouter);

module.exports = router;
