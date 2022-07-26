const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getAllRegUsers = (req, res) => {
  connection.query("SELECT name, user_id FROM RegularUser", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

exports.createNewRegUser = (req, res) => {
  const Name = req.body.name;
  const Language = req.body.language;
  const Email = req.body.email;
  // console.log(`${Name}, ${Language}, ${Email}`);
  connection.query("INSERT INTO RegularUser (name, language, email) VALUES (?,?,?)", [Name, Language, Email], (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results.insertId.toString(10));
  }); 
}