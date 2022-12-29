const UserService = require('./user.service.js')
const joi = require('joi');
const { InvalidParamsError } = require('../../exceptions/index.exception');

const schema = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
    nickname: joi.string().required()
}).error( new InvalidParamsError());

const emailSchema = joi.string().pattern(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i).required().error(new Error("이메일 형식으로 입력해 주세요."))
const passwordSchema = joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/i).required().error(new Error("비밀번호 양식이 틀렸습니다."))

const loginSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
}).error( new InvalidParamsError());

class UserController{
    constructor() {
        this.userService = new UserService();
    }

    loginUser = async (req, res, next) => {
        try {
            const { email, password } = await loginSchema.validateAsync(req.body);
            const { refreshToken,accessToken,nickName } = await this.userService.loginUser({email,password})

            res.setHeader('Access-Control-Expose-Headers', 'Access-Token, Refresh-Token');
            res.setHeader('Access-Token', `Bearer ${accessToken}`);
            res.setHeader('Refresh-Token', `Bearer ${refreshToken}`);

            res.json({message: '로그인 성공',nickName});
        }catch (error){
            next(error);
        }
    }

    createUser = async (req, res, next) => {
        try {
            const { email, password, nickname } = await schema.validateAsync(req.body);
            await emailSchema.validateAsync(email);
            await passwordSchema.validateAsync(password);
            await this.userService.createUser({email, password, nickname})

            res.json({message: "회원가입 되었습니다."})

        } catch (error) {
            next(error);
        }
    }
    test = async (req,res,next) => {
        res.json({message:'test!'})
    }
}

module.exports = UserController
