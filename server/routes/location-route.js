const express = require("express");
const controllers = require("../controllers/location-controller");
const router = express.Router();

router.get('/locations', controllers.getAllLocations);
// router.post('/locations', controllers.updateLocationAddress);

module.exports = router;