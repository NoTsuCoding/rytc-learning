const jwt = require('jsonwebtoken');
const db = require('../../utils/database/connection')

const scConfig = require('../../config/secure.json')

const jwtSecret = scConfig['jwt-tokens-secret']
const jwtAccessTokenExpiredIn = scConfig['jwt-access-token-expired-in']
const jwtRefreshTokenExpiredIn = scConfig['jwt-refresh-token-expired-in']

function jwtDecode(token) {
    try {
        return jwt.verify(token, jwtSecret)
    } catch (err) {
        return false
    }
}
async function GenerateRefreshToken(user_id) {
    const refreshToken = jwt.sign({userID: user_id}, jwtSecret, {expiresIn: jwtRefreshTokenExpiredIn})

    return refreshToken
}

async function GenerateAccessToken(user_id) {
    const accessToken = jwt.sign({userID: user_id}, jwtSecret, {expiresIn: jwtAccessTokenExpiredIn})

    return accessToken
}

module.exports = {
    jwtDecode, GenerateRefreshToken, GenerateAccessToken
}