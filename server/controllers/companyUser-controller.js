const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getAllCompanyUsers = (req, res) => {
  connection.query("SELECT name, user_id, company_id FROM CompanyUser", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

//added by Adri
//grab tuple infomration of reg user with id= user_id
exports.getCompUserInfo = (req, res) => {
    // const user_id = req.body.user;
    const user_id = req.params.user_id;

    connection.query("SELECT * FROM CompanyUser WHERE user_id = (?)",
        [user_id],
        (err, results) => {
            console.log(err);
            res.send(results);
        });
};

//change name of reg user with id= user_id
exports.changeCompUserName = (req, res) => {

    const user_id = req.params.user_id;
    const new_name =  req.params.new_name;

    connection.query("UPDATE CompanyUser SET name=? WHERE user_id=?",
        [new_name, user_id],
        (err, results) => {
            console.log(err);
            res.send(results);
        });
};

//change language of reg user with id= user_id
exports.changeCompUserLang = (req, res) => {
    const user_id = req.params.user_id;
    const new_lang = req.params.new_lang;

    connection.query("UPDATE CompanyUser SET language=? WHERE user_id=?",
        [new_lang, user_id],
        (err, results) => {
            console.log(err);
            res.send(results);
        });
};

//change email of reg user with id= user_id
exports.changeCompUserEmail = (req, res) => {
    const user_id = req.params.user_id;
    const new_email = req.params.new_email;

    connection.query("UPDATE CompanyUser SET email=? WHERE user_id=?",
        [new_email, user_id],
        (err, results) => {
            console.log(err);
            res.send(results);
        });
};
