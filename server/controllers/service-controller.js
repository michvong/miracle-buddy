const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getAllServicesNames = (req, res) => {
  connection.query("SELECT name FROM Service", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

// exports.getSortedServiceNames = (req, res) => {
//     connection.query("SELECT Location.address, Location.postal_code, Location.hours_of_operation, Location.name FROM Location INNER JOIN Service ON Service.service_id=Location.service_id WHERE Service.name = (?)",
//         [service],
//         (err, results) => {
//             if (err) throw err;
//             res.send(results);
//     });
// };