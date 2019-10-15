const {getMonth} = require('../models/month')


module.exports = {
    get: (req, res) => {
        getMonth(req)
        .then((info) => {
            res.send(info.data)
        })
        .catch((error) => {
            console.log("error in get month data: ", error)
            res.sendStatus(500);
        })
    }
}