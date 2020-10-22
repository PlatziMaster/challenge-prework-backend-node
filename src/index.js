require('dotenv').config();
const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const Routes = require('./routes');

app.use('/', Routes);

app.listen(port, (err) => {
  if (err) {
    console.error('Error: ', err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});
