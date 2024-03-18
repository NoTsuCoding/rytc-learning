const { StatusCodes } = require('http-status-codes')

const studentService = require('../services/student')

exports.createStudent = async (req, res, next) => {
    const { student } = req.body

    if (!student) return res.status(StatusCodes.BAD_REQUEST).json({status: "fail", err_msg: "BAD REQUEST"})
    
    try {
        await studentService.createStudent(student)
        // const { accessToken, refreshToken } = await userService.login({user_id, username, pwd, ipAddress})
        return res
            .status(StatusCodes.OK)
            .json({ status: "success" })
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