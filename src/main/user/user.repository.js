const { sequelize } = require('../../models');
const { Op } = require('sequelize');

class UserRepository{
    constructor(users) {
        this.users = users;
    }

    findUser = async (find) => {
        return this.users.findOne({
            raw: true,
            where:{
                [Op.or]:find
            }
        });
    };


    createUser = async ({email,password,nickname}) => {
        await this.users.create({
            loginId:email,
            password,
            nickname
        });
    }

    findLogin = async ({email,password}) => {
        return this.users.findOne({
            raw: true,
            where:{
                [Op.and]:[{loginId:email},{password}]
            }
        });
    };

}

module.exports = UserRepository;
