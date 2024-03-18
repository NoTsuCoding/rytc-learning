const bcrypt = require("bcrypt")

async function hashPassword(plainPassword) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(plainPassword, 10)
            .then(hashed => {
                return resolve(hashed)
            })
    })
}

async function comparePassword(plainPassword, hashedPassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainPassword, hashedPassword)
            .then(result => {
                return resolve(result)
            }) 
    })
}

module.exports = {
    hashPassword, comparePassword
}