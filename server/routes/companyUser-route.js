const express = require("express");
const controllers = require("../controllers/companyUser-controller");
const router = express.Router();

router.get('/companyauthusers', controllers.getAllCompanyUserNames);

module.exports = router;