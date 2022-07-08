var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'miracle_buddy_db'
});
 
connection.connect((error) => {
    if (error) throw error;
    console.log('Connected to the MySQL server');
  });
  
connection.end();