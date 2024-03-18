const db = require('../../utils/database/connection')

const { getUserByUsername, createUser } = require('../user/')
const code = require('../user/code.json')

const password = require('../../utils/password')

async function createStudent({student_id, id_card, title_id, first_name, last_name, major_id, level_id}) {
    let StudentCreatable = await isUserExist(student_id)

    if (!StudentCreatable) throw({code: "UNABLE_CREATE_USER"}) 

    const pwd = await password.hashPassword(id_card)

    const UUID = await createUser(student_id, pwd, code.ROLE.STUDENT, title_id, first_name, last_name, id_card)

    const student = await createEducation(UUID, student_id, major_id, level_id)

    return true
}

function isUserExist(student_id) {
    return new Promise((resolve, reject) => {
        getUserByUsername(student_id)
        .then((result) => {
            resolve(false)
        })
        .catch((err) => {
            resolve(true)
        })
    })
}

async function createEducation(user_id, student_id, major_id, level_id) {
    return new Promise((resolve, reject) => {
        db.query(
            "INSERT INTO education_information(user_id, student_id, major_id, level_id) \
                VALUES (?, ?, ?, ?) \
            ",
            [user_id, student_id, major_id, level_id],
            (err, result, field) => {
                if (err || result.affectedRows == 0) return reject({code: "FAIL_CREATED"})

                return resolve(true)
            }
        )
    })
}

module.exports = {
    createStudent
}