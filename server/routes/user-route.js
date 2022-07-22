const express = require("express");
const controller = require('../controllers/user-controller');
const router = express.Router();

router.get('/user/:user_id', controller.getUserInfo);
// router.get('/user/', controller.getUserInfo);

module.exports = router;