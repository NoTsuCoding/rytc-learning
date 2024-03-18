const db = require('../../utils/database/connection')

async function getUserByID(userId) {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT * FROM user \
                LEFT JOIN role ON user.role_id = role.role_id \
                LEFT JOIN user_information on user.user_id = user_information.user_id \
                LEFT JOIN title ON title.title_id = user_information.title_id \
            WHERE user.user_id = ?",
            [userId],
            (err, results, fields) => {
                if (err) return reject(err)

                if (results.length == 0) return reject({code: "INVALID_USER_ID"})

                return resolve(results[0])
            }
        )
    })
}

async function getUserByUsername(username) {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT * FROM user \
                LEFT JOIN role ON user.role_id = role.role_id \
                LEFT JOIN user_information on user.user_id = user_information.user_id \
                LEFT JOIN title ON title.title_id = user_information.title_id \
            WHERE username = ?",
            [username],
            (err, results, fields) => {
                if (err) return reject(err)

                if (results.length == 0) return reject({code: "INVALID_USERNAME_OR_PASSWORD"})

                return resolve(results[0])
            }
        )
    })
}

async function getUserByRefreshToken(refreshToken) {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT * FROM user INNER JOIN role ON user.role_id = role.role_id WHERE refresh_token = ?",
            [refreshToken],
            (err, results, fields) => {
                if (err) return reject(err)

                if (results.length == 0) return reject({code: "INVALID_REFRESH_TOKEN"})

                return resolve(results[0])
            }
        )
    })
}

module.exports = {
    getUserByID, getUserByUsername, getUserByRefreshToken
}