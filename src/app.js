require('dotenv').config();

// const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const routes = require('./routes/index.js');

// app.use(express.urlencoded({ extended: false }));
const {
  errorHandler,
  errorLogger,
} = require('./middlewares/error-middleware.js');

const morgan = require('morgan');
const Winston = require('./util/WinstonUtil.js');

const session = require('express-session');
const fileStore = require('session-file-store')(session);

app.use(session({
  httpOnly: true,	//자바스크립트를 통해 세션 쿠키를 사용할 수 없도록 함
  secure: true,	//https 환경에서만 session 정보를 주고받도록 처리
  secret: 'secret key',	//암호화하는 데 쓰일 키
  resave: false,	//세션을 언제나 저장할지 설정함
  saveUninitialized: true,	//세션이 저장되기 전 uninitialized 상태로 미리 만들어 저장
  cookie: {	//세션 쿠키 설정 (세션 관리 시 클라이언트에 보내는 쿠키)
    httpOnly: true,
    secure: true
  }
}));


app.use(
    morgan(':method :status :url :response-time ms', { stream: Winston.stream })
);

app.use(express.json());
app.use(cookieParser());
// app.use(cors(corsOptions));
app.use('/api', routes);
app.use(errorLogger); // Error Handler
app.use(errorHandler); // Error Handler

module.exports = app;
