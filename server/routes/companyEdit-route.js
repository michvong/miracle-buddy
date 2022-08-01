const express = require("express");
const controllers = require("../controllers/companyEdit-controller");
const router = express.Router();

router.post('/update-service', controllers.updateService);
router.post('/add-services', controllers.addService);
router.post('/delete-service', controllers.deleteService)

router.post('/update-inventory', controllers.updateInventory);
router.post('/add-inventory', controllers.addInventory);
router.post('/delete-inventory', controllers.deleteInventory);

router.post('/update-event', controllers.updateEvent);
router.post('/add-event', controllers.addEvent);
router.post('/delete-event', controllers.deleteEvent);

router.post('/verify-warehouse', controllers.verifyWarehouse);
router.post('/verify-location', controllers.verifyLocation);
router.post('/verify-city', controllers.verifyCity);
router.post('/verify-name-date', controllers.verifyNameDate);

module.exports = router;