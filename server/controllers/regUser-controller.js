const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getAllRegUsers = (req, res) => {
  connection.query("SELECT name, user_id FROM RegularUser", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};
