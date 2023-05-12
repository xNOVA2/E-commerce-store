const mysql = require('mysql2')

const connection = mysql.createConnection({
    database:"e-commerce",
    user:"root",
    password:"root1234",
    host:"localhost"
})

module.exports = connection;