const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getAllLocations = (req, res) => {
  connection.query("SELECT a.name AS location_name, c.city, a.hours_of_operation, b.name as service_name, a.address\n" +
      "FROM Location a, Service b, AreaCode c\n" +
      "WHERE a.service_id = b.service_id AND c.postal_code = a.postal_code;", (err, results) => {
    console.log(results);
    if (err) throw err;
    res.send(results);
  });
};

exports.getAllCity = (req, res) => {
  connection.query("SELECT DISTINCT c.city\n" +
      "FROM Location a, AreaCode c\n" +
      "WHERE c.postal_code = a.postal_code;", (err, results) => {
    console.log(results);
    if (err) throw err;
    res.send(results);
  });
}

// exports.updateLocationAddress = (req, res) => {
//   const address = req.body.address;
//   const id = req.body.id;
//   connection.query("UPDATE Location SET address = ? WHERE id = ?", [address, id], (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   })
// }