const connection = require("../services/db");

exports.updateService = (req, res) => {
    const name = req.body.name;
    const hop = req.body.hop;
    const address = req.body.address;
    const postalCode = req.body.postal_code;

    connection.query("UPDATE Location SET name = (?), hours_of_operation = (?) WHERE address = (?) AND postal_code = (?)",
        [name, hop, address, postalCode],
        (err, results) => {
            res.send(results);
        });
};

exports.addService = (req, res) => {
    const name = req.body.name;
    const hop = req.body.hop;
    const address = req.body.address;
    const postalCode = req.body.postal_code;

    connection.query("UPDATE Location SET name = (?), hours_of_operation = (?) WHERE address = (?) AND postal_code = (?)",
        [name, hop, address, postalCode],
        (err, results) => {
            res.send(results);
        });
};

exports.deleteService = (req, res) => {
    const name = req.body.name;
    const hop = req.body.hop;
    const address = req.body.address;
    const postalCode = req.body.postal_code;

    connection.query("UPDATE Location SET name = (?), hours_of_operation = (?) WHERE address = (?) AND postal_code = (?)",
        [name, hop, address, postalCode],
        (err, results) => {
            res.send(results);
        });
};

exports.updateEvent = (req, res) => {
    const location = req.body.location;
    const description = req.body.description;
    const event_name = req.body.eventName;
    const date = req.body.date;

    console.log(location, description, event_name, date);

    connection.query("UPDATE Event SET location = (?), description = (?) WHERE event_name = (?) AND date = (?)",
        [location, description, event_name, date],
        (err, results) => {
            res.send(results);
        });
};

exports.addEvent = (req, res) => {
    const name = req.body.name;
    const hop = req.body.hop;
    const address = req.body.address;
    const postalCode = req.body.postal_code;

    connection.query("UPDATE Location SET name = (?), hours_of_operation = (?) WHERE address = (?) AND postal_code = (?)",
        [name, hop, address, postalCode],
        (err, results) => {
            res.send(results);
        });
};

exports.deleteEvent = (req, res) => {
    const name = req.body.name;
    const hop = req.body.hop;
    const address = req.body.address;
    const postalCode = req.body.postal_code;

    connection.query("UPDATE Location SET name = (?), hours_of_operation = (?) WHERE address = (?) AND postal_code = (?)",
        [name, hop, address, postalCode],
        (err, results) => {
            res.send(results);
        });
};