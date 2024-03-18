const db = require('../../utils/database/connection')

const CODE = require('./code.json')

function createLog(user_id, event_type_id) {
    return new Promise((resolve, reject) => {
        db.query(
            "INSERT INTO log(user_id, event_type_id) VALUES (?, ?)",
            [user_id, event_type_id],
            (err, result, field) => {
                if (err || result.affectedRows == 0) return reject({code: "LOG_CREATED_FAILED"})

                return resolve(result.insertId)
                
            }
        )
    })
}

function createEventParameter(log_id, payloads = []) {
    return new Promise((resolve, reject) => {
        if (!log_id) return reject({code: "LOG_ID_INVALID"})
        if (payloads.length == 0) return reject({code: "PAYLOAD_IS_EMPTY"})

        for (let payload of payloads) {
            db.query(
                "INSERT INTO event_parameter(log_id, parameter_id, parameter_value) VALUES (?, ?, ?)",
                [log_id, payload.parameter_id, payload.parameter_value],
                (err, result, field) => {
                    if (err || result.affectedRows == 0) return reject({code: "PARAMETER_CREATED_FAILED"})
                }
            )
        }

        return resolve(true)
    })
}

async function createFullLog(user_id, event_type_id, payloads) {
    return new Promise((resolve, reject) => {
        createLog(user_id, event_type_id)
            .then((log_id) => {
                return createEventParameter(log_id, payloads)
            })
            .then((result) =>{
                return resolve(true)
            })
    })
}

module.exports = {
    createFullLog
}