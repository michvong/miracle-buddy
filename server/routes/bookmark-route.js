const express = require("express");
const controllers = require("../controllers/bookmark-controller");
const router = express.Router();

//added by Jacky
router.post('/bookmark-set', controllers.setBookmark);
router.post('/bookmark-delete', controllers.deleteBookmark);

// router.post('/locations', controllers.updateLocationAddress);

//added by Adri
router.get("/bookmark-bookmarked-companies/:user_id", controllers.getBookmarked);


module.exports = router;
