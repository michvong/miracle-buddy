const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getBookmark = (req, res) => {
    const user_id = req.body.user_id;
    const service_id = req.body.service_id;
    connection.query("",
        [user_id, service_id],
        (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.modifyBookmark = (req, res) => {
    const id = req.body.id;
    connection.query("SELECT * FROM Company WHERE company_id = (?)",
        [id],
        (err, results) => {
            console.log(results);
            if (err) throw err;
            res.send(results);
        });
};