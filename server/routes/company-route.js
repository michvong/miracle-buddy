const express = require("express");
const controllers = require("../controllers/company-controller");
const router = express.Router();

//Added by Adri
//acquires tuple info of company with id = company_id
router.get('/company/:user_id', controllers.getCompInfo);
//changes instance of attribute for company with id = company_id
router.put('/company/edit-name/:company_id/:new_name', controllers.changeCompName);
router.put('/company/edit-phone/:company_id/:new_phone', controllers.changeCompPhone);
router.put('/company/edit-email/:company_id/:new_email', controllers.changeCompEmail);

module.exports = router;