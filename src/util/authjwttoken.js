const jwt = require('jsonwebtoken');
require('dotenv').config();
const env = process.env;

let tokenObject = {};

const validateToken = function (tokenValue) {
    try {
        jwt.verify(tokenValue, process.env.TOKEN_SECRET);
        return true;
    } catch (error) {
        return false;
    }
};


const createToken = function (id, duration) {
    return jwt.sign({ userId: id }, env.TOKEN_SECRET, {
        expiresIn: duration,
    });
}

module.exports = { tokenObject, createToken, validateToken};
