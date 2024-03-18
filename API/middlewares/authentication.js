const {StatusCodes} = require('http-status-codes')

const jwtUtils = require('../utils/jwt/index')

const authenticate = (req, res, next) => {
    let accessToken = req.headers['authorization']
    
    if (!accessToken) return res.status(StatusCodes.UNAUTHORIZED).json({status: "fail", err_msg: "ACCESS_DENIED"})

    accessToken = accessToken.replace("Bearer ", "")

    const user = jwtUtils.jwtDecode(accessToken)
    
    if (!user) return res.status(StatusCodes.BAD_REQUEST).json({status: "fail", err_msg: "EXPIRED_TOKEN"})

    req.user = user

    return next()
}

module.exports = {
    authenticate
}