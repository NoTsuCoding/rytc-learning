const { StatusCodes } = require('http-status-codes')


exports.indexPage = async (req, res, next) => {
    return res.status(StatusCodes.OK).json({msg: "Hello, Welcome to RYTC | Learning API"})
}

exports.protectedPage = (req, res, next) => {
    console.log(req.user)

    return res.status(StatusCodes.OK).json({msg: "Hello, Welcome to RYTC | Learning API (Protected)"})
}