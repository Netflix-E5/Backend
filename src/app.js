require('dotenv').config();

// const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const routes = require('./routes/index.js');

// app.use(express.urlencoded({ extended: false }));
// const {
//   errorHandler,
//   errorLogger,
// } = require('./middlewares/error-middleware');

app.use(express.json());
// app.use(cookieParser());
// app.use(cors(corsOptions));
app.use('/api', routes);
// app.use(errorLogger); // Error Handler
// app.use(errorHandler); // Error Handler

module.exports = app;
