const express = require("express");
const controllers = require("../controllers/warehouse-controller");
const router = express.Router();

router.get('/products', controllers.getAllProducts);
router.post('/sort-products', controllers.showBySortedProducts);
router.post('/avg-stock', controllers.getAvgStock);


module.exports = router;