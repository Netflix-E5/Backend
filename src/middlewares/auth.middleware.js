const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();
const { AuthenticationError } = require('../exceptions/index.exception');
const {tokenObject,validateToken} = require("../util/authjwttoken");

module.exports = async (req, res, next) => {
    try {
        const accessToken = req.header('Access-Token');
        const refreshToken = req.header('Refresh-Token')
        const [accTokenType, accTokenValue] = accessToken.split(' ');
        const [refTokenType, refTokenValue] = refreshToken.split(' ');

        if (accessToken === 'null' || !accessToken) {
            throw new AuthenticationError(
                '로그인 후 이용 가능한 기능입니다.',
                'badRequest'
            );
        }

        if (accTokenType !== 'Bearer') {
            throw new AuthenticationError(
                '전달된 토큰에 오류가 발생하였습니다.',
                'badRequest'
            );
        }

        if (accTokenValue === undefined) {
            throw new AuthenticationError(
                '로그인 후 이용 가능한 기능입니다.',
                'badRequest'
            );
        }

        if(!validateToken(accTokenValue)){
            if(!validateToken(refTokenValue)){
                delete tokenObject[refTokenValue];
                throw new AuthenticationError("로그인 후 이용 가능합니다.");
            }

            if(!tokenObject[refTokenValue]) {
                throw new AuthenticationError("유효하지 않은 토큰")
            }

            throw new AuthenticationError("Access Token 만료");
        }

        const { userId } = jwt.verify(accessToken, process.env.TOKEN_SECRET);

        // !!! controller에서 값을 받을 때, 기존과 같이 user객체가 아닌 accessTokenId(숫자)가 반환됩니다. -> "userId = res.locals.user"로 받으세요 !!!
        res.locals.user = userId;
        next();
    } catch (error) {
        next(error);
    }
};