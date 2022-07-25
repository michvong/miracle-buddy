const express = require("express");
const controllers = require("../controllers/regUser-controller");
const router = express.Router();

router.get('/regusers', controllers.getAllRegUserNames);

module.exports = router;