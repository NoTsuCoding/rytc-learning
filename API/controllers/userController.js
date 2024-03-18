const {StatusCodes} = require('http-status-codes')

const userService = require('../services/user/index')

exports.userProfile = async (req, res, next) => {
    const { userID } = req.user

    try {
        const userProfile = await userService.getUserByID(userID)

        return res
            .status(StatusCodes.OK)
            .json({ status: "success", user_profile: userProfile})
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