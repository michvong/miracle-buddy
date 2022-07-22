const express = require("express");
const controllers = require("../controllers/company-controller");
const router = express.Router();

router.get('/company', controllers.getAllCompany);
// router.post('/locations', controllers.updateLocationAddress);


module.exports = router;