const {getData} = require('../models/ripple')


module.exports = {
    get: (req, res) => {
        getData(req)
        .then((info) => {
            res.send(info.data)
        })
        .catch((error) => {
            console.log("error in get data(ripple): ", error)
            res.sendStatus(500);
        })
    }
}