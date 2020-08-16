const express = require("express"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3000;

app.use(require('./routes/index.routes'));

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});