const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getAllRegUserNames = (req, res) => {
  connection.query("SELECT name FROM RegularUser", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

//added by Adri
//grab tuple infomration of reg user with id= user_id
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

//change name of reg user with id= user_id
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

//change language of reg user with id= user_id
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

//change email of reg user with id= user_id
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
