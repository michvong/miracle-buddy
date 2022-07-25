const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getAllEvent = (req, res) => {
    connection.query("SELECT * FROM Event", (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};


exports.showBySortedEvent = (req, res) => {
    const id = req.body.id;
    connection.query("SELECT a.event_name, a.date, a.description, a.location, b.company_id\n" +
        "FROM Event a, EventHost b\n" +
        "WHERE a.date = b.date AND a.event_name = b.event_name AND b.company_id = "+id, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};