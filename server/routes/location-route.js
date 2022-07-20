const express = require("express");
const controllers = require("../controllers/location-controller");
const router = express.Router();

router.route("/locations").get(controllers.getAllLocations);
// router
//  .route("/:id")
//  .get(controllers.getTodo)
//  .put(controllers.updateTodo)
//  .delete(controllers.deleteTodo);

module.exports = router;