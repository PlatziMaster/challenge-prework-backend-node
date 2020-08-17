require('dotenv').config()
const products = require('./utils/mocks.js')
const bodyParser = require('body-parser');
const fs = require('fs');
let { productsMock } = require('./utils/mocks.js');
const express = require("express"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile(file);
});

app.get('/products', (req, res) => {
  let storeProducts = products;
  res.json(storeProducts);
});
app.get('/new-product', (req, res) => {
  
});

app.post('/new-product/', (req, res) => {
  const {id, image, title, category, price, description} = req.body
  const checkProduct = id.trim().length == 0 || image.trim().length == 0|| title.trim().length == 0 || category.trim().length == 0 || price.length == 0 || description.trim().length == 0
  if (checkProduct) {
    res.status(400).send('Please enter all fields')
  } else {
    const newProduct = {
      id,
      image,
      title,
      category,
      price,
      description,
    }
    productsMock.push(newProduct)
    console.log(productsMock)
    res.redirect('/products')
  }
});

app.get('/delete-product/:id', (req, res) => {
  const filterProduct = ({ id }) => id !== req.params.id
  const deleteProduct = productsMock.filter(filterProduct)
  productsMock = deleteProduct
  console.log(productsMock)
  res.redirect('/products')
});
app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});