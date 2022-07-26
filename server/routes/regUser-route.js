const express = require("express");
const controllers = require("../controllers/regUser-controller");
const router = express.Router();

router.get('/regusers', controllers.getAllRegUsers);
router.post('/regusers/add-user', controllers.createNewRegUser);

module.exports = router;