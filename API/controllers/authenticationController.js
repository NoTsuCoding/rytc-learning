const {StatusCodes} = require('http-status-codes')

const userService = require('../services/user/index')

exports.login = async (req, res, next) => {
    const { user_id, username, pwd, ipAddress } = req.query
    try {
        console.log(req.query)
        const { accessToken, refreshToken } = await userService.login({user_id, username, pwd, ipAddress})
        return res
            .status(StatusCodes.OK)
            .header("Authorization", accessToken)
            .json({ status: "success", refreshToken })
    } catch (err) {
        console.log(err)
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                status: "fail",
                err_msg: err.code
            })
    }
}

exports.loginByRefreshToken = async (req, res, next) => {
    const refreshToken = req.cookies['refreshToken']
    const { ipAddress } = req.query

    try {
        const { accessToken } = await userService.loginByRefreshToken(refreshToken, ipAddress)
        return res
            .status(StatusCodes.OK)
            .header("Authorization", accessToken)
            .json({ status: "success"})
    } catch (err) {
        console.log(err)
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                status: "fail",
                err_msg: err.code
            })
    }

}