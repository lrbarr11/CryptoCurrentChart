const {getData} = require('../models/coin')


module.exports = {
    get: (req, res) => {
        getData(req)
        .then((info) => {
            res.send(info.data)
        })
        .catch((error) => {
            console.log("error in get data (coin): ", error)
            res.sendStatus(500);
        })
    }
}