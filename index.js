const functions = require('firebase-functions');
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

app.get('/api/:year/:month/:day', findData.findDay);

exports.api = functions.https.onRequest(app);
