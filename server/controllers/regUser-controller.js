const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getAllRegUserNames = (req, res) => {
  connection.query("SELECT name FROM RegularUser", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};
