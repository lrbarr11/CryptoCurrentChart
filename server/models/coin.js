const axios = require('axios')
const {API_KEY} = require('../../config.js')


module.exports = {
    getData: () => {
        return axios.get(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=7&api_key=${API_KEY}`)
    }
}