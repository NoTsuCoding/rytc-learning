const mysql = require('mysql2')
const databaseConfig = require('../../config/database.json')

const pool = mysql.createPool(databaseConfig)

pool.getConnection(function(err, connection) {
    if (err) throw err
    console.log("Database connected successfully")
    connection.release()
})

pool.on('error', function(err){
    console.log(err.code)
})

module.exports = pool