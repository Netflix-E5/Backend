const UserRepository = require('./repository.js');
const { Users } = require('../../models');
const { ValidationError } = require('../../exceptions/index.exception');
const encrypt = require('../../util/encrypt.js');
const joi = require('joi');

const schema = (eq,errorMessage) => {
    return joi.string().invalid(eq).error(new ValidationError(errorMessage));
}

class UserService{
    constructor() {
        this.userRepository = new UserRepository(Users);
    }

    loginUser = async ({email,password}) => {
        password = encrypt(password);

        const findUser =  await this.userRepository.findLogin({email,password});
        if(!findUser) throw new ValidationError("아이디 또는 비밀번호를 잘못 입력했습니다.")

        //리프레시 토큰 생성하기

    }

    createUser = async ({email, password, nickname}) => {
        const findUser =  await this.userRepository.findUser([
            {loginId:email},
            {nickname:nickname}
        ]);

        if(findUser){
            await schema(email,"중복된 이메일 입니다.").validateAsync(findUser.loginId);
            await schema(nickname,"중복된 닉네임 입니다.").validateAsync(findUser.nickname)
        }

        password = encrypt(password);

        await this.userRepository.createUser({email, password, nickname})
    }


}

module.exports = UserService