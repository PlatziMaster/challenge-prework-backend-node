const express = require("express"),
  path = require("path"),
  app = express(),
  http= require("http"),
  hostname= "127.0.0.1",
  port = process.env.PORT || 3000;
  


app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (_req, res) => {
  let file = path.join(__dirname, "src/asset/receipt.pdf");
  res.sendFile();
});

app.get('/products', (_req, res) => {
  let storeProducts = '';
  res.json(storeProducts);
});

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});