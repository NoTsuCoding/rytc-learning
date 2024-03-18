const { generateUUID } = require('./generataUUID')
exports.generateUUID = generateUUID

const { login, loginByRefreshToken } = require('./login')
exports.login = login
exports.loginByRefreshToken = loginByRefreshToken

const { getUserByID, getUserByUsername, getUserByRefreshToken } = require('./getUser')
exports.getUserByID = getUserByID
exports.getUserByUsername = getUserByUsername
exports.getUserByRefreshToken = getUserByRefreshToken

const { createUser } = require('./createUser')
exports.createUser = createUser 

const code = require('./code.json')
exports.code = code