const router = require('express').Router();
const coin = require('../controllers/coin')



router.get('/', coin.get)



module.exports = router;