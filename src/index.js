const dotenv = require('dotenv').config()
const products = require('./assets/js/products')
const { ENV , PORT } = process.env
const express = require("express"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || PORT,
  development = 'development';

if (ENV === development) {
  console.log('Development config')
}

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile(file);
});

app.get('/products', (req, res) => {
  let storeProducts = products.mockCheck();
  res.status(200).json({
    message: 'Products listed',
    data: storeProducts
  })
});

app.get('/products/:id', (req, res) => {
  try {
    const { id } = req.params
    let product = products.mockCheck()[id - 1].Product;
    let cat = products.mockCheck()[id - 1].Category;
    let desc = products.mockCheck()[id - 1].Description;
    let price = products.mockCheck()[id - 1].Price;
    let qty = products.mockCheck()[id - 1].Qty;
    let sku = products.mockCheck()[id - 1].Sku;
    let img = products.mockCheck()[id - 1].Image;
    let place = products.mockCheck()[id - 1]["Transaction Type"];
    res.status(200).json({
      Message: 'Products found',
      Product: product,
      Category: cat,
      Description: desc,
      Price: price,
      Quantity: qty,
      Sku: sku,
      Img: img,
      Place: place,
    })
  } catch (err) {
    res.status(404).json({
      Message: 'Not products found'
    })
  }
});

app.post('/products/create', (req, res) => {
  let id = randomNum()
  let product = products.mockCheck()[id].Product;
  let cat = products.mockCheck()[id].Category;
  let desc = products.mockCheck()[id].Description;
  let price = products.mockCheck()[id].Price;
  let qty = products.mockCheck()[id].Qty;
  let sku = products.mockCheck()[id].Sku;
  let img = products.mockCheck()[id].Image;
  let place = products.mockCheck()[id]["Transaction Type"];
  res.status(200).json({
    message: 'Product created',
    Product: product,
    Category: cat,
    Description: desc,
    Price: price,
    Quantity: qty,
    Sku: sku,
    Img: img,
    Place: place,
  })
});

app.put('/products/update', (req, res) => {
  let id = randomNum()
  let product = products.mockCheck()[id].Product;
  let cat = products.mockCheck()[id].Category;
  let desc = products.mockCheck()[id].Description;
  let price = products.mockCheck()[id].Price;
  let qty = products.mockCheck()[id].Qty;
  let sku = products.mockCheck()[id].Sku;
  let img = products.mockCheck()[id].Image;
  let place = products.mockCheck()[id]["Transaction Type"];
  res.status(201).json({
    message: 'Product updated',
    Product: product,
    Category: cat,
    Description: desc,
    Price: price,
    Quantity: qty,
    Sku: sku,
    Img: img,
    Place: place,
  })
});

app.delete('/products/delete', (req, res) => {
  let id = randomNum()
  let product = products.mockCheck()[id].Product;
  res.status(200).json({
    message: `Product --${product}-- has been deleted`,
  })
});

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});

function randomNum () {
  return  Math.floor(Math.random() * 1001);
}
