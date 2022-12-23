const express = require('express');
const router = express.Router();

const episodeRouter = require('../routes/episode.js');
const genreRouter = require('../routes/genre.js');
const movieRouter = require('../routes/movie.js');
const pickRouter = require('../routes/pick.js');
const ratingRouter = require('../routes/rating.js');
const userRouter = require('../routes/user.js');
const viewRouter = require('../routes/view.js');

router.use('/episode', episodeRouter);
router.use('/genre', genreRouter);
router.use('/movie', movieRouter);
router.use('/pick', pickRouter);
router.use('/rating', ratingRouter);
router.use('/user', userRouter);
router.use('/view', viewRouter);

module.exports = router;
