const mysql = require("mysql2");

let conectar = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "1728Benavides",
    database: "Acceso",
    port: 3306
});

module.exports = conectar.promise();