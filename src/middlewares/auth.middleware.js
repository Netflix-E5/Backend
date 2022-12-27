const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();
const { AuthenticationError } = require('../exceptions/index.exception');

const validateToken = function (tokenValue) {
    try {
        jwt.verify(tokenValue, process.env.TOKEN_SECRET);
        return true;
    } catch (error) {
        return false;
    }
};

module.exports = async (req, res, next) => {
    try {
        const authorization = req.header('Authorization');
        const [tokenType, tokenValue] = authorization.split(' ');

        if (authorization === 'null' || !authorization) {
            throw new AuthenticationError(
                '로그인 후 이용 가능한 기능입니다.',
                'badRequest'
            );
        }

        if (tokenType !== 'Bearer') {
            throw new AuthenticationError(
                '전달된 토큰에 오류가 발생하였습니다.',
                'badRequest'
            );
        }

        if (tokenValue === undefined) {
            throw new AuthenticationError(
                '로그인 후 이용 가능한 기능입니다.',
                'badRequest'
            );
        }
        console.log(tokenValue);

        const {userId} = jwt.decode(tokenValue);
        const session = req.session.refreshToken;
        console.log(req.session);

        if(!validateToken(tokenValue)){
            console.log('TEST!!')
            if(validateToken()) {

            }
        }

        // const userId  = jwt.verify(tokenValue, process.env.TOKEN_SECRET);
        // console.log(userId);

    } catch (error) {
        next(error);
    }
};