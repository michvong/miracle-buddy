const connection = require("../services/db")

exports.getCompInfo = (req, res) => {

    const company_id = req.params.company_id;

    connection.query("SELECT * FROM Company WHERE company_id = (?)",
        [company_id],
        (err, results) => {
            console.log(err);
            res.send(results);
        });
};