const express = require("express");
const controllers = require("../controllers/companyUser-controller");
const router = express.Router();

router.get('/companyauthusers', controllers.getAllCompanyUsers);

//Added by Adri
//acquires tuple info of reg user with id = user_id
router.get('/compuser/:user_id', controllers.getCompUserInfo);
//changes instance of attribute for reg user with id = user_id
router.put('/compuser/edit-name/:user_id/:new_name', controllers.changeCompUserName);
router.put('/compuser/edit-lang/:user_id/:new_lang', controllers.changeCompUserLang);
router.put('/compuser/edit-email/:user_id/:new_email', controllers.changeCompUserEmail);

module.exports = router;