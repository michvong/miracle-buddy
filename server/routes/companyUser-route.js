const express = require("express");
const controllers = require("../controllers/companyUser-controller");
const router = express.Router();

router.get('/companyauthusers', controllers.getAllCompanyUsers);

module.exports = router;