const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getAllLocations = (req, res) => {
  connection.query("SELECT * FROM Location", (err, results) => {
    console.log(results);
    if (err) throw err;
    res.send(results);
  });
};

// exports.updateLocationAddress = (req, res) => {
//   const address = req.body.address;
//   const id = req.body.id;
//   connection.query("UPDATE Location SET address = ? WHERE id = ?", [address, id], (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   })
// }