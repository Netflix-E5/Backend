require('dotenv').config();
const env = process.env;
const { AuthenticationError } = require('../exceptions/index.exception.js');

// 로그인 되어 있는 유저일 경우 (==쿠키를 가지고 있는 경우) Error를 반환한다.
module.exports = async (req, res, next) => {
    try {
        if (req.header('Access-Token') && req.header('Refresh-Token')) {
            throw new AuthenticationError('이미 로그인된 사용자입니다.', 403);
        }
        next();
    } catch (error) {
        next(error);
    }
};
