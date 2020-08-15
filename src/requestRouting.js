const express = require('express');
const path = require('path');
const Router = express.Router();
const PlatziStoreProducts = require('../utils/mocks/platzistoremocks');

Router.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
})

Router.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile(file);
})

Router.get('/products', (req, res) => {
  let storeProducts = PlatziStoreProducts;
  res.json(storeProducts);
})

Router.all('*', function (req, res) {
  res.send('The requested resource was not found')
  res.end()
})

module.exports = Router