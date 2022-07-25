const express = require("express");
const controllers = require("../controllers/regUser-controller");
const router = express.Router();

router.get('/regusers', controllers.getAllRegUserNames);

//Added by Adri
//acquires tuple info of reg user with id = user_id
router.get('/user/:user_id', controllers.getUserInfo);
//changes instance of attribute for reg user with id = user_id
router.put('/user/edit-name/:user_id/:new_name', controllers.changeUserName);
router.put('/user/edit-lang/:user_id/:new_lang', controllers.changeUserLang);
router.put('/user/edit-email/:user_id/:new_email', controllers.changeUserEmail);

module.exports = router;