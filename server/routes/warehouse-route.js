const express = require("express");
const controllers = require("../controllers/warehouse-controller");
const router = express.Router();

router.get('/products', controllers.getAllProducts);

module.exports = router;