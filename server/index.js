const express = require("express");
const bodyParser = require('body-parser');
const monthRouter = require('./routes/month.js')
const app = express();


app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"))
app.use('/month', monthRouter)

const port = 3000;

app.listen(port, () => console.log(`app is listening on port ${port}`))