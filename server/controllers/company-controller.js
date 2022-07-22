const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getAllCompany = (req, res) => {
    connection.query("SELECT * FROM Company", (err, results) => {
        console.log(results);
        if (err) throw err;
        res.send(results);
    });
};