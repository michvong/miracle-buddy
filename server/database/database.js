const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "school",
});

const initializeDatabase = () => {
  connection.connect((err) => {
    if (err) {
      console.log("Error occurred", err);
      throw 'Error occurred connecting to MySQL server!';
    } else {
      console.log("Connected to MySQL Server");
    }
  })

  // create database if not exists
  const query = "CREATE DATABASE IF NOT EXISTS school";
  connection.query(query, function (err, result) {
    if (err) {
      console.log(err);
      throw 'Error occurred creating database.'
    }
    console.log("New database created");
  })

  // create table
  const sql = "CREATE TABLE IF NOT EXISTS courses (id INT, name VARCHAR(255), credits INT)";
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      throw 'Error occurred creating table.'
    }
    console.log("New table created");
  })

  // add entries to table
  connection.query("INSERT INTO courses (id, name, credits) VALUES (1, 'History', '3')");
};

module.exports = {
  initializeDatabase,
};