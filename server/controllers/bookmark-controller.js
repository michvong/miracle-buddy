const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.setBookmark = (req, res) => {
    const user_id = req.body.user_id;
    const company_id = req.body.company_id;
    connection.query("INSERT INTO Bookmarks VALUES (?,?)",
        [user_id, company_id],
        (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.deleteBookmark = (req, res) => {
    const user_id = req.body.user_id;
    const company_id = req.body.company_id;
    connection.query("DELETE FROM Bookmarks WHERE user_id = (?) AND company_id = (?)",
        [user_id, company_id],
        (err, results) => {
            if (err) throw err;
            res.send(results);
        });
};