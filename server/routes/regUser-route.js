const express = require("express");
const controllers = require("../controllers/regUser-controller");
const router = express.Router();

router.get('/regusers', controllers.getAllRegUsers);

module.exports = router;