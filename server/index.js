const express = require("express");
const bodyParser = require('body-parser');
const coinRouter = require('./routes/coin.js');
const ethereumRouter = require('./routes/ethereum.js');
const rippleRouter = require('./routes/ripple.js');
const app = express();


app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"))

app.use('/Data/Bitcoin', coinRouter)
app.use('/Data/Ethereum', ethereumRouter)
app.use('/Data/Ripple', rippleRouter)

const port = 3000;

app.listen(port, () => console.log(`app is listening on port ${port}`))