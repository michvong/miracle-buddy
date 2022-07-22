const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getAllEvent = (req, res) => {
    connection.query("SELECT * FROM Event", (err, results) => {
        console.log(results);
        if (err) throw err;
        res.send(results);
    });
};