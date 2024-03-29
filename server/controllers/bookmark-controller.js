const AppError = require("../utils/appError");
const connection = require("../services/db");

//added by Jacky
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

//added by Adri

//get company id's of all bookmarked companies
exports.getBookmarked = (req, res) => {
    const user_id = req.params.user_id;

    connection.query("SELECT Company.company_id, Company.name, Company.phone_number, Company.email " +
    "FROM Company INNER JOIN( " +
        "SELECT DISTINCT x.company_id FROM Bookmarks AS x " +
        "WHERE NOT EXISTS (" +
            "SELECT * FROM (SELECT RegularUser.user_id FROM RegularUser WHERE RegularUser.user_id = ?) AS y " +
            "WHERE NOT EXISTS(" +
                "SELECT * FROM Bookmarks AS z " +
                "WHERE (z.company_id = x.company_id) AND (z.user_id = y.user_id))) ) AS a ON " +
                    "a.company_id = Company.company_id",
        [user_id],
        (err, results_division) => {
            if (err) throw err;
            res.send(results_division);
        });
};
