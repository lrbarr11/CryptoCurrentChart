const axios = require('axios')

module.exports = {
    getMonth: () => {
        return axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    }
}