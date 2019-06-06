const express = require('express');
const cors = require('cors');
const app = express();
const findData = require('./findData');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors({ origin: true }));

app.get('/', (req, res) => {
  res.send('Hello GET by bellaTeam')
});

app.get('/api/findDay/:year/:month/:day', findData.findDay);

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});