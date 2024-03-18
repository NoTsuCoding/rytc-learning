const db = require('../../utils/database/connection')

const { generateUUID } = require('./generataUUID')


function createUser(username, pwd, role_id, title_id, first_name, last_name, id_card) {
    return new Promise((resolve, reject) => {
        createUserLogin(username, pwd, role_id)
            .then((UUID) => {
                return createUserInformation(UUID, title_id, first_name, last_name, id_card)
            })
            .then((UUID) => {
                resolve(UUID)
            })
    })
}

function createUserLogin(username, pwd, role_id) {
    const UUID = generateUUID()
    return new Promise((resolve, reject) => {
        db.query(
            "INSERT INTO user(user_id, username, pwd, role_id) \
                VALUES (?, ?, ?, ?) \
            ",
            [UUID, username, pwd, role_id],
            (err, result, field) => {
                if (err || result.affectedRows == 0) return reject({code: "FAIL_CREATED"})

                return resolve(UUID)
                
            }
        )
    })
}

function createUserInformation(uuid, title_id, first_name, last_name, id_card) {
    return new Promise((resolve, reject) => {
        db.query(
            "INSERT INTO user_information(user_id, title_id, first_name, last_name, id_card) \
                VALUES (?, ?, ?, ?, ?) \
            ",
            [uuid, title_id, first_name, last_name, id_card],
            (err, result, field) => {
                if (err || result.affectedRows == 0) return reject({code: "FAIL_CREATED"})

                return resolve(uuid)
                
            }
        )
    })
}

module.exports = {
    createUser
}