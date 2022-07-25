const express = require("express");
const controllers = require("../controllers/service-controller");
const router = express.Router();

router.get('/services', controllers.getAllServicesNames);
router.post('/sort-services', controllers.showBySortedServices);
router.post('/update-services', controllers.updateServices);

module.exports = router;