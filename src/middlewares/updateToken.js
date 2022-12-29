const {tokenObject,validateToken,createToken} = require("../util/authjwttoken");
const {AuthenticationError} = require("../exceptions/index.exception");

const updateToken = async (req, res, next) => {
    try{
        console.log(req);
        const refreshToken = req.header('Refresh-Token')
        const accessToken = req.header('Access-Token');
        const [, refTokenValue] = refreshToken.split(' ');
        const [, accTokenValue] = accessToken.split(' ');

        if(!tokenObject[refTokenValue]) {
            //서버에 리프레시 토큰이 없을때
            delete tokenObject[refTokenValue];
            throw new AuthenticationError("유효하지 않은 토큰");
        }else if(!validateToken(accTokenValue) && !validateToken(refTokenValue)){
            //리프레시 토큰/액세스 토큰 모두 유효기간 만료시 로그아웃
            delete tokenObject[refTokenValue];
            throw new AuthenticationError("모든 토큰 만료");
        }else if(!validateToken(accTokenValue)){
            //액세스 토큰만 없는 경우
            const userId = tokenObject[refTokenValue];
            const accessToken = createToken(userId,'3h');
            res.setHeader('Access-Control-Expose-Headers', 'Access-Token');
            res.setHeader('Access-Token', `Bearer ${accessToken}`).json({message:"새로운 토큰이 발급되었습니다."});
        }
        res.json({message:"토큰의 기간이 아직 유효합니다."});
    }catch (error){
        next(error);
    }
}

module.exports = updateToken