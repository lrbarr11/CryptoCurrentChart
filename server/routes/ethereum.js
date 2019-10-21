const router = require('express').Router();
const ethereum = require('../controllers/ethereum')

router.get('/', ethereum.get)

module.exports = router;