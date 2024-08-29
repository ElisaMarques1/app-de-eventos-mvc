//importando o modulo mysql2/promise
const mysql = require("mysql2/promise");

//configuração da pool de conexões com mySQL
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "app-eventos",
});

module.exports = pool;