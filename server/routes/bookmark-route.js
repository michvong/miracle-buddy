const express = require("express");
const controllers = require("../controllers/bookmark-controller");
const router = express.Router();

router.post('/bookmark-set', controllers.setBookmark);
router.post('/bookmark-delete', controllers.deleteBookmark);

// router.post('/locations', controllers.updateLocationAddress);


module.exports = router;