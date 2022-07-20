const router = require('express').Router();
const controller = require('../controllers/index')

router.get('/', controller.helloWorld);
// router.get('/table', controller.getTable);

module.exports = router;