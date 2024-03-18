const jwtUtils = require('../../utils/jwt')
const passwordUtils = require('../../utils/password')

const { getUserByUsername, getUserByID, getUserByRefreshToken } = require('./getUser')
const { createFullLog, code } = require('../log')

async function login({user_id, username, pwd, ipAddress}) {
    try {
        const user = user_id ? await getUserByID(user_id) : await getUserByUsername(username)
    
        if (!await passwordUtils.comparePassword(pwd, user.pwd)) throw ({code: "INVALID_USERNAME_OR_PASSWORD"})
    
        const refreshToken = await jwtUtils.GenerateRefreshToken(user.user_id)
        const accessToken = await jwtUtils.GenerateAccessToken(user.user_id)

        createFullLog(
            user.user_id,
            code.EVENT.LOG_IN,
            [
                {parameter_id: code.PARAMETER.USERNAME, parameter_value: username},
                {parameter_id: code.PARAMETER.IP_ADDRESS, parameter_value: ipAddress},
                {parameter_id: code.PARAMETER.STATUS, parameter_value: "SUCCESS"},
            ]
        )
    
        return { accessToken, refreshToken }
    } catch (err) {
        createFullLog(
            null,
            code.EVENT.LOG_IN,
            [
                {parameter_id: code.PARAMETER.USERNAME, parameter_value: username},
                {parameter_id: code.PARAMETER.IP_ADDRESS, parameter_value: ipAddress},
                {parameter_id: code.PARAMETER.STATUS, parameter_value: "FAILED"},
                {parameter_id: code.PARAMETER.MESSAGE, parameter_value: err.code},
            ]
        )
        throw (err)
    }


}

async function loginByRefreshToken(refreshToken, ipAddress) {
    try {
        const user_from_token = jwtUtils.jwtDecode(refreshToken)

        // Refresh Token Expired
        if (!user_from_token) throw ({code: "EXPIRED_REFRESH_TOKEN"})

        const accessToken = await jwtUtils.GenerateAccessToken(user_from_token.userID)

        createFullLog(
            null,
            code.EVENT.REFRESH,
            [
                {parameter_id: code.PARAMETER.REFRESH_TOKEN, parameter_value: refreshToken},
                {parameter_id: code.PARAMETER.IP_ADDRESS, parameter_value: ipAddress},
                {parameter_id: code.PARAMETER.STATUS, parameter_value: "SUCCESS"},
            ]
        )

        return { accessToken }
    } catch (err) {
        createFullLog(
            null,
            code.EVENT.REFRESH,
            [
                {parameter_id: code.PARAMETER.REFRESH_TOKEN, parameter_value: refreshToken},
                {parameter_id: code.PARAMETER.IP_ADDRESS, parameter_value: ipAddress},
                {parameter_id: code.PARAMETER.STATUS, parameter_value: "FAILED"},
                {parameter_id: code.PARAMETER.MESSAGE, parameter_value: err.code},
            ]
        )
        throw (err)
    }
}

module.exports = {
    login, loginByRefreshToken
}