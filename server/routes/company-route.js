const express = require("express");
const controllers = require("../controllers/company-controller");
const router = express.Router();

//Added by Adri
//acquires tuple info of company with id = company_id
router.get('/company/:company_id', controllers.getCompInfo);
//changes instance of attribute for company with id = company_id
router.put('/company/edit-name/:company_id/:new_name', controllers.changeCompanyName);
router.put('/company/edit-phone/:company_id/:new_phone', controllers.changeCompanyPhone);
router.put('/company/edit-email/:company_id/:new_email', controllers.changeCompanyEmail);

module.exports = router;
