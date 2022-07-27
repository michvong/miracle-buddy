const connection = require("../services/db");

exports.updateService = (req, res) => {
    const name = req.body.name;
    const hop = req.body.hop;
    const address = req.body.address;
    const postalCode = req.body.postal_code;

    connection.query("UPDATE Location SET name = (?), hours_of_operation = (?) WHERE address = (?) AND postal_code = (?)",
        [name, hop, address, postalCode],
        (err, results) => { res.send(results); });
};

exports.addService = (req, res) => {

};

exports.deleteService = (req, res) => {

};

exports.updateInventory = (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const stock = req.body.stock;
    const item_id = req.body.item_id;

    console.log(name, description, stock, item_id);
    connection.query("UPDATE Products SET name = (?), description = (?) WHERE item_id = (?) ",
        [name, description, item_id],
        (err, results) => {  });
    connection.query("UPDATE Inventory SET stock = (?) WHERE item_id = (?) ",
        [stock, item_id],
        (err, results) => { res.send(results); });
};

exports.addInventory = (req, res) => {

};

exports.deleteInventory = (req, res) => {

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

};

exports.deleteEvent = (req, res) => {

};