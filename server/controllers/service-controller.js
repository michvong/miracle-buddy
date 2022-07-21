const AppError = require("../utils/appError");
const connection = require("../services/db");

exports.getAllServicesNames = (req, res) => {
  connection.query("SELECT name FROM Service", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

exports.showBySortedServices = (req, res) => {
    const service = req.body.service;
    const type = req.body.type;

    console.log(service);
    console.log(type);

    if (type === "service_name"){
        connection.query("SELECT a.name, c.city, a.hours_of_operation, b.name as service_name, a.address " +
            "FROM Location a, Service b, AreaCode c " +
            "WHERE a.service_id = b.service_id AND c.postal_code = a.postal_code AND b.name = (?)",
            [service],
            (err, results) => {
                console.log(results);
                res.send(results);
            });
    }

    else if (type === "city"){
        connection.query("SELECT a.name, c.city, a.hours_of_operation, b.name as service_name, a.address " +
            "FROM Location a, Service b, AreaCode c " +
            "WHERE a.service_id = b.service_id AND c.postal_code = a.postal_code AND c.city = (?)",
            [service],
            (err, results) => {
                console.log(results);
                res.send(results);
            });
    }
};

// app.post('/sort-services', (req, res)=> {
//   const service = req.body.service;

//   connection.query("SELECT Location.address, Location.postal_code, Location.hours_of_operation, Location.name FROM Location INNER JOIN Service ON Service.service_id=Location.service_id WHERE Service.name = (?)",
//       [service],
//       (err,result)=>{
//         console.log(err);
//         res.send(result);
//       });
// });