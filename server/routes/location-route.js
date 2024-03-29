const express = require("express");
const controllers = require("../controllers/location-controller");
const router = express.Router();

router.post('/locations', controllers.getAllLocations);
// router.post('/locations', controllers.updateLocationAddress);
router.get('/city', controllers.getAllCity);

module.exports = router;