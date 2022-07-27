const connection = require("../services/db");

exports.updateService = (req, res) => {
    const address = req.body.address;
    const postal_code = req.body.postal_code;
    const hours_of_operation = req.body.hours_of_operation;
    const name = req.body.name;
    const company_id = req.body.company_id;
    const service_id = req.body.service_id;

    console.log(address, postal_code, hours_of_operation, name, service_id);

    connection.query("UPDATE Location SET name = (?), hours_of_operation = (?), service_id = (?) WHERE address = (?) AND postal_code = (?)",
        [name, hours_of_operation, service_id, address, postal_code],
        (err, results) => { res.send(results); });
};

exports.addService = (req, res) => {
    const address = req.body.address;
    const postal_code = req.body.postal_code;
    const hours_of_operation = req.body.hours_of_operation;
    const name = req.body.name;
    const company_id = req.body.company_id;
    const service_id = req.body.service_id;
    const city = req.body.city;

    console.log(address, postal_code, hours_of_operation, name, company_id,service_id);


    connection.query("INSERT IGNORE INTO AreaCode VALUES (?, ?)",
        [postal_code, city],
        (err, results) => {
            connection.query("INSERT IGNORE INTO Location VALUES (?, ?, ?, ?, ?, ?)",
                [address, postal_code, hours_of_operation, name, company_id, service_id],
                (err, results) => { res.send(results); });
        });

};

exports.deleteService = (req, res) => {
    const address = req.body.address;
    const postal_code = req.body.postal_code;

    console.log(address, postal_code);
    connection.query("DELETE FROM Location WHERE address = (?) AND postal_code  = (?)",
        [address, postal_code],
        (err, results) => { res.send(results); });

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
    const name = req.body.name;
    const description = req.body.description;
    const stock = req.body.stock;
    const item_id = req.body.item_id;
    const warehouse_id = req.body.warehouse_id;

    console.log(name, description, stock, item_id);
    connection.query("INSERT IGNORE INTO Products VALUES (?,?,?)",
        [item_id, name, description],
        (err, results) => {
            connection.query("INSERT INTO Inventory VALUES (?,?,?) ",
                [item_id, stock, warehouse_id],
                (err, results) => { res.send(results); });
        });

};

exports.deleteInventory = (req, res) => {

    const name = req.body.name;
    const description = req.body.description;
    const stock = req.body.stock;
    const item_id = req.body.item_id;
    const warehouse_id = req.body.warehouse_id;

    connection.query("DELETE FROM Inventory WHERE item_id = (?) AND warehouse_id = (?)",
        [item_id, warehouse_id],
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
    const event_name = req.body.event_name;
    const date = req.body.date;
    const location = req.body.location;
    const description = req.body.description;
    const company_id = req.body.company_id;

    console.log(event_name, date, location, description, company_id);

    connection.query("INSERT INTO Event VALUES (?,?,?,?)",
        [event_name, date, location, description],
        (err, results) => {
            connection.query("INSERT INTO EventHost VALUES (?,?,?)",
                [event_name, date, company_id],
                (err, results) => {
                res.send(results);
            });
        });

};

exports.deleteEvent = (req, res) => {
    const event_name = req.body.event_name;
    const date = req.body.date;

    console.log(event_name, date);
    connection.query("DELETE FROM Event WHERE event_name = (?) AND date = (?)",
        [event_name, date],
        (err, results) => { res.send(results); });


};