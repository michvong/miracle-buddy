const express = require("express");
const controller = require('../controllers/user-controller');
const router = express.Router();

router.get('/user', controller.getUserInfo);

module.exports = router;