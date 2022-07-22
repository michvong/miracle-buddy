const express = require("express");
const controllers = require("../controllers/event-controller");
const router = express.Router();

router.get('/event', controllers.getAllEvent);
router.post('/sort-event', controllers.showBySortedEvent);

// router.post('/locations', controllers.updateLocationAddress);


module.exports = router;