const dotenv = require('dotenv')
  dotenv.config()

const express = require("express"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3000;

const { productsMock } = require('../utils/mocks/mockProducts')

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile(file);
});

//list products
app.get('/products', (req, res) => {
  res.status(200).json({
    data: productsMock,
    message: 'products listed'
  });
})

//list a product by id
app.get('/products/:id', (req, res) => {
  let consult = productsMock.filter( (a) => {
    return a.id == req.params.id
  })
  res.status(200).json({
    data: consult,
    message: 'Product retriev'
  });
})

//create a product
app.post('/products/', (req, res) => {
  let id_= productsMock[productsMock.length - 1].id + 1
  let createProduct = {
    "id": id_,
    "name_product": "Eggplant - Baby",
    "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "value": "$6.68",
    "quantity": 1
  }
  res.status(201).json({
    data: createProduct,
    message: "Product created"
  })
})

//update a product
app.put('/products/:id', (req, res) => {
  let consult = productsMock.filter( (a) => {
    return a.id == req.params.id
  })
  consult.name_product = "Product modified"

  res.status(200).json({
    data: consult,
    message: 'Product updated'
  });
})

//delete a product by id
app.delete('/products/:id', (req, res) => {
  for (var i = 0; i < productsMock.length; i++) {
    if (productsMock[i].id == req.params.id) {
      productsMock.splice(i, 1);
      break;
    }
  }
  
  res.status(200).json({
    data: productsMock,
    message: 'Product deleted'
  });
})

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});