const express = require("express");
const router = express.Router()

const studentController = require('../controllers/studentController')

const authMiddleware = require('../middlewares/authentication')

router.post('/create', authMiddleware.authenticate, studentController.createStudent)
// router.get("/", indexController.indexPage)
// router.get('/protect', authMiddleware.authenticate, indexController.protectedPage)

module.exports = router