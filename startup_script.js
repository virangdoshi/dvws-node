var mysql = require('mysql');
require('dotenv').config();

const connHost = process.env.SQL_LOCAL_CONN_URL;
const connUser = process.env.SQL_username;
const connPass = process.env.SQL_password;


var connection = mysql.createConnection({
  host: connHost,
  user: connUser,
  password: connPass
});

console.log('Creating MySQL database for DVWS....');
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("DROP DATABASE IF EXISTS dvws_sqldb; CREATE DATABASE dvws_sqldb", function (err, result) {
    connection.end()
    if (err) throw err;
    console.log("SQL Database created");

  });
});


