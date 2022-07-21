const dbConfig = require("../config/db-config.js");

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : dbConfig.HOST,
  user     : dbConfig.USER,
  password : dbConfig.PASSWORD,
  database : dbConfig.DB
});
 
connection.connect((error) => {
    if (error) throw error;
    console.log('Connected to the MySQL server');
});

module.exports = connection;
  
// app.post('/register', (req)=> {
//   const username = req.body.username;
//   const password = req.body.password;
//   connection.query("INSERT INTO Company (categoryid, categoryname) VALUES (?,?)",
//   [username, password], 
//   (err)=>{
//     console.log(err);
//   });
// });

// app.get('/posts', (req, res) => {
//   connection.query("SELECT * FROM Location", (err, results) => {
//     if(err) throw err;
//     res.send(results);
//   });
// });

// app.get('/services', (req, res) => {
//   connection.query("SELECT name FROM Service ", (err, results) => {
//     if(err) throw err;
//     res.send(results);
//   });
// });

// app.post('/sort-services', (req, res)=> {
//   const service = req.body.service;

//   connection.query("SELECT Location.address, Location.postal_code, Location.hours_of_operation, Location.name FROM Location INNER JOIN Service ON Service.service_id=Location.service_id WHERE Service.name = (?)",
//       [service],
//       (err,result)=>{
//         console.log(err);
//         res.send(result);
//       });
// });

// app.listen(3001, ()=>{
//   console.log("Running server");
// })

// ------------------------------------------------------------- //

// const mysql = require("mysql");

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "school",
// });

// const initializeDatabase = () => {
//   connection.connect((err) => {
//     if (err) {
//       console.log("Error occurred", err);
//       throw 'Error occurred connecting to MySQL server!';
//     } else {
//       console.log("Connected to MySQL Server");
//     }
//   })

//   // create database if not exists
//   const query = "CREATE DATABASE IF NOT EXISTS school";
//   connection.query(query, function (err, result) {
//     if (err) {
//       console.log(err);
//       throw 'Error occurred creating database.'
//     }
//     console.log("New database created");
//   })

//   // create table
//   const sql = "CREATE TABLE IF NOT EXISTS courses (id INT, name VARCHAR(255), credits INT)";
//   connection.query(sql, function (err, result) {
//     if (err) {
//       console.log(err);
//       throw 'Error occurred creating table.'
//     }
//     console.log("New table created");
//   })

//   // add entries to table
//   connection.query("INSERT INTO courses (id, name, credits) VALUES (1, 'History', '3')");
// };

// module.exports = {
//   initializeDatabase,
// };