const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getAllCompanyUserNames = (req, res) => {
  connection.query("SELECT name FROM CompanyUser", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};
