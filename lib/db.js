var mysql = require('mysql2');
var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1q2w3e',
    database: 'account',
    port:3306,
});
db.connect();


module.exports = db;