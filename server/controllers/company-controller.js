const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getAllCompany = (req, res) => {
    connection.query("SELECT * FROM Company", (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.getCompany = (req, res) => {
    const user_id = req.body.userID;
    const id = req.body.id;
    connection.query("SELECT company_id, name, phone_number, email, (SELECT COUNT(user_id) FROM Bookmarks WHERE user_id = (?) AND Bookmarks.company_id = Company.company_id) AS bookmark FROM Company WHERE company_id = (?)",
        [user_id,id],
        (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};