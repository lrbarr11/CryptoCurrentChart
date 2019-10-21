const ripple = require('../controllers/ripple')
const router = require('express').Router();

router.get('/', ripple.get)


module.exports = router;