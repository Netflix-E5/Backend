require('dotenv').config();
const env = process.env;

const crypto = require('crypto');

const encrypt = (password) => {
    const key = crypto.scryptSync(env.encryptKey,env.salt, 32);
    let iv = Buffer.alloc(16,0);

    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv); //key는 32바이트, iv는 16바이트
    let result = cipher.update(password, 'utf8', 'base64');
    result += cipher.final('base64');
    return result;
}

module.exports = encrypt;
