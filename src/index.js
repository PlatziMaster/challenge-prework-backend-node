const express = require("express"),
  path = require("path"),
  fetch = require('node-fetch'),
  app = express(),
  port = process.env.PORT || 3000;

  app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile(file);
});

app.get('/products', async (req, res) => {
  let storeProducts = 'https://92413e28-70f6-415d-9a22-35021dbb85f6.mock.pstmn.io';
  try {

    let response = await fetch(storeProducts);
    let data = await response.json();
    res.json(data);
  } catch(error) {
    res.json(error.message);
  }
});

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});