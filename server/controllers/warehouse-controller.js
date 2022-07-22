const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getAllProducts = (req, res) => {
    connection.query("SELECT SUM(stock) AS inventory_sum, Products.name, Products.description, Inventory.item_id\n" +
        "FROM Inventory, Products\n" +
        "WHERE Inventory.item_id = Products.item_id\n" +
        "GROUP BY Products.name\n" +
        "ORDER BY name", (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.showBySortedProducts = (req, res) => {
    const id = req.body.id;

    connection.query("SELECT stock, Products.name, Products.description, Inventory.item_id, Warehouse.company_id " +
        "FROM Inventory, Products, Warehouse " +
        "WHERE Inventory.item_id = Products.item_id " +
        "AND Warehouse.warehouse_id = Inventory.warehouse_id " +
        "AND Warehouse.company_id= "+id+" ORDER BY name", (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

// exports.showBySortedServices = (req, res) => {
//     const service = req.body.service;
//     const filter = req.body.filter;
//
//     connection.query("SELECT a.name, c.city, a.hours_of_operation, b.name as service_name, a.address " +
//         "FROM Location a, Service b, AreaCode c " +
//         "WHERE a.service_id = b.service_id AND c.postal_code = a.postal_code AND "+filter+" = (?)",
//         [service],
//         (err, results) => {
//             console.log(results);
//             res.send(results);
//         });
//
// };