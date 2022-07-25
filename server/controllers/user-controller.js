const appError = require("../utils/appError");
const connection = require("../services/db");

//first try to get all users and see what happens, then get select users
exports.getUserInfo = (req, res) => {
    // const user_id = req.body.user;
    const user_id = req.params.user_id;

    connection.query("SELECT * FROM RegularUser WHERE user_id = (?)",
        [user_id],
        (err, results) => {
            console.log(err);
            res.send(results);
        });
};

exports.changeUserName = (req, res) => {

    const user_id = req.params.user_id;
    const new_name =  req.params.new_name;

    connection.query("UPDATE RegularUser SET name=? WHERE user_id=?",
        [new_name, user_id],
        (err, results) => {
            console.log(err);
            res.send(results);
        });
};

exports.changeUserLang = (req, res) => {
    const user_id = req.params.user_id;
    const new_lang = req.params.new_lang;

    connection.query("UPDATE RegularUser SET language=? WHERE user_id=?",
        [new_lang, user_id],
        (err, results) => {
            console.log(err);
            res.send(results);
        });
};

exports.changeUserEmail = (req, res) => {
    const user_id = req.params.user_id;
    const new_email = req.params.new_email;

    connection.query("UPDATE RegularUser SET email=? WHERE user_id=?",
        [new_email, user_id],
        (err, results) => {
            console.log(err);
            res.send(results);
        });
};
