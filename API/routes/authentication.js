const express = require("express");
const router = express.Router()

const authenticationController = require("../controllers/authenticationController")

router.get("/login", authenticationController.login)
router.get("/refresh", authenticationController.loginByRefreshToken)

module.exports = router