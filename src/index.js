require("dotenv").config();

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
  res.setHeader("Content-Type", "application/pdf");
  res.sendFile(file);
});

app.get("/products", (req, res) => {
  let storeProducts = {
    data: [
      {
        id: 0,
        title: "Hoodie",
        price: 75000,
        description: "Best Hoodie ever",
      },
      {
        id: 1,
        title: "Mug",
        price: 20000,
        description: "Mug for the best programmer",
      },
      {
        id: 2,
        title: "Pin",
        price: 7500,
        description: "Everybody loves pins",
      },
      {
        id: 3,
        title: "Socks",
        price: 15000,
        description: "For cold nights",
      },
    ],
  };
  res.status(200).json(storeProducts);
});

app.get("/*", (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Not found'
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});
