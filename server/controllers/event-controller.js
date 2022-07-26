const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getAllEvent = (req, res) => {
    connection.query("SELECT Event.event_name AS event_name, Event.date AS date, location, description, Company.name AS company_name\n" +
        "FROM Event, EventHost, Company\n" +
        "WHERE Event.event_name = EventHost.event_name AND Event.date = EventHost.date AND Company.company_id = EventHost.company_id\n", (err, results) => {
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