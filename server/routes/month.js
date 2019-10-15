const router = require('express').Router();
const {get} = require('../controllers/month')

router.get('/', get)

module.exports = router;