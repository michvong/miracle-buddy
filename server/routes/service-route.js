const express = require("express");
const controllers = require("../controllers/service-controller");
const router = express.Router();

router.get('/services', controllers.getAllServicesNames);
// router.route("/sort-services").get(controllers.getSortedServiceNames);

module.exports = router;