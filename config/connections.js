var mysql = require('mysql');

var connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "root",
    port: 8889,
    database: "burgers_db"
});

connection.connect(function(err){
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("connecting as id: " + dbConnection.threadId);
});

module.exports = connection;