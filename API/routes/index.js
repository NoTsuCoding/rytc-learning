const express = require("express");
const router = express.Router()

const indexController = require('../controllers/indexController')

const authMiddleware = require('../middlewares/authentication')

router.get("/", indexController.indexPage)
router.get('/protect', authMiddleware.authenticate, indexController.protectedPage)

module.exports = router