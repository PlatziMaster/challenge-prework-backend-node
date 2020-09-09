const express = require('express');
const path = require('path');
const Router = express.Router();

const Products = require('./mock/db')


Router.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

Router.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "./assets/receipt.pdf");
  res.sendFile(file);
});

Router.get('/products', (req, res) => {
  let storeProducts = Products;
  res.json(storeProducts);
});

module.exports = Router;