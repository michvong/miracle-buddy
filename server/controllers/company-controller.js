const AppError = require("../utils/appError");
const connection = require("../services/db");

// get all info for company with id=company_id
exports.getCompInfo = (req, res) => {

    const company_id = req.params.company_id;

    connection.query("SELECT * FROM Company WHERE company_id = (?)",
        [company_id],
        (err, results) => {
            console.log(err);
            res.send(results);
        });
};

//change name of company with id= company_id
exports.changeCompanyName = (req, res) => {

    const company_id = req.params.company_id;
    const new_name =  req.params.new_name;

    connection.query("UPDATE Company SET name=? WHERE company_id=?",
        [new_name, company_id],
        (err, results) => {
            console.log(err);
            res.send(results);
        });
};

//change phone number of company with id= company_id
exports.changeCompanyPhone = (req, res) => {

    const company_id = req.params.company_id;
    const new_phone =  req.params.new_phone;

    connection.query("UPDATE Company SET phone_number=? WHERE company_id=?",
        [new_phone, company_id],
        (err, results) => {
            console.log(err);
            res.send(results);
        });
};

//change email of company with id= company_id
exports.changeCompanyEmail = (req, res) => {

    const company_id = req.params.company_id;
    const new_email =  req.params.new_email;

    connection.query("UPDATE Company SET email=? WHERE company_id=?",
        [new_email, company_id],
        (err, results) => {
            console.log(err);
            res.send(results);
        });
};

//Jacky added
exports.getAllCompany = (req, res) => {
    connection.query("SELECT * FROM Company", (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.getCompany = (req, res) => {
    const user_id = req.body.userID;
    const id = req.body.id;
    connection.query("SELECT company_id, name, phone_number, email, (SELECT COUNT(user_id) " +
        "FROM Bookmarks WHERE user_id = (?) AND Bookmarks.company_id = Company.company_id) AS bookmark " +
        "FROM Company WHERE company_id = (?)",
        [user_id,id],
        (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

