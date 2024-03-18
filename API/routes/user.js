const express = require("express");
const router = express.Router()

const userController = require('../controllers/userController')

const authMiddleware = require('../middlewares/authentication')

router.get("/profile", authMiddleware.authenticate, userController.userProfile)

module.exports = router