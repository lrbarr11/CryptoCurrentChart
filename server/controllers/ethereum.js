const {getData} = require('../models/ethereum')


module.exports = {
    get: (req, res) => {
        getData(req)
        .then((info) => {
            res.send(info.data)
        })
        .catch((error) => {
            console.log("error in get data(ethereum): ", error)
            res.sendStatus(500);
        })
    }
}