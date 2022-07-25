const express = require("express");
const controller = require('../controllers/user-controller');
const router = express.Router();

router.get('/user/:user_id', controller.getUserInfo);
// router.get('/user/', controller.getUserInfo);
router.put('/user/edit-name/:user_id/:new_name', controller.changeUserName);
router.put('/user/edit-lang/:user_id/:new_lang', controller.changeUserLang);
// router.post('/user/edit-email/:user-id', controller.changeUserEmail);

module.exports = router;
