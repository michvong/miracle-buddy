const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getAllLocations = (req, res) => {
  const user_id = req.body.user_id;
  connection.query("SELECT a.name AS location_name, c.city, a.postal_code, a.hours_of_operation, b.name as service_name, a.address, a.service_id, (SELECT COUNT(user_id)  FROM Requests WHERE user_id = (?) AND service_id = (a.service_id)) AS relation\n" +
      "FROM Location a, Service b, AreaCode c, Requests d\n" +
      "WHERE a.service_id = b.service_id AND c.postal_code = a.postal_code AND d.service_id=a.service_id;",
      [user_id],
      (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

exports.getAllCity = (req, res) => {
  connection.query("SELECT DISTINCT c.city\n" +
      "FROM Location a, AreaCode c\n" +
      "WHERE c.postal_code = a.postal_code;", (err, results) => {
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