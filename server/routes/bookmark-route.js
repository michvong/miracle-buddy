const express = require("express");
const controllers = require("../controllers/bookmark-controller");
const router = express.Router();

router.post('/bookmark-get', controllers.getBookmark);
router.post('/bookmark-modify', controllers.modifyBookmark);
// router.post('/locations', controllers.updateLocationAddress);


module.exports = router;