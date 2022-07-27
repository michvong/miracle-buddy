const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getAllCompanyUsers = (req, res) => {
  connection.query("SELECT name, user_id, company_id FROM CompanyUser", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};
