var express = require('express');
const mysql = require('mysql');
var app = express();


let connection = mysql.createConnection({
  host: 'localhost', // host for connection
  port: 3306, // default port for mysql is 3306
  database: 'GamersAssociation', // database from which we want to connect out node application
  user: 'root', // username of the mysql connection
  // password: 'rkreddy129@sql' // password of the mysql connection
});

connection.connect(function (err) {
  if (err) {
    console.log("error occured while connecting.\n " + err);
    return;
  }
  else {
    console.log("connection created with Mysql successfully");
    require('./loaders/expressLoaders')(app);
  }
});

module.exports = {
  app,
  connection
};
