const { products, getProducts } = require("./products");

const express = require("express"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get("/receipts", (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile(file);
});

app.get("/products", (req, res) => {
  let storeProducts = products;
  res.json(storeProducts);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const result = getProducts(id);

  res.json(result);
});

app.listen(port, (err) => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});
