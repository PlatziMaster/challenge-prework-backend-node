const env = require('node-env-file'); 
env(__dirname + '/.env');

const express = require("express"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3000;

var Routing = require('./requestRouting');

app.use('/', Routing)

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});