require('dotenv').config();

const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const routes = require('./routes/index.js');

// app.use(express.urlencoded({ extended: false }));
const {
  errorHandler,
  errorLogger,
} = require('./middlewares/error-middleware.js');

const morgan = require('morgan');
const Winston = require('./util/WinstonUtil.js');

app.use(
    morgan(':method :status :url :response-time ms', { stream: Winston.stream })
);

app.use(express.json());
app.use(cookieParser());
app.use(
    session({
      secret: "countingViews",
      resave: true,
      saveUninitialized: false,
      cookie: {
      }
    })
);

// app.use(cors(corsOptions));
app.use('/api', routes);
app.use(errorLogger); // Error Handler
app.use(errorHandler); // Error Handler

module.exports = app;
