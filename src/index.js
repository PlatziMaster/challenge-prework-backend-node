
const express = require('express');
const app = express();
path=require("path")

app.get('/', (req, res, next) => {
  res.send({hello: "world"});
})

const server = app.listen(3000, function() {
  console.log(`Example app listening at http://localhost:${server.address().port}`);
})



/*const express = require("express"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3000;
*/
app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile(file);
});

app.get('/products', (req, res) => {
  let storeProducts = { "Productos" : [ 
  { "TipoProducto":"Camiseta" , "Tallas":"XS, M, L" }, 
  { "TipoProducto":"Taza Conmemorativa" , "Material":"Ceramica" }, 
  { "TipoProducto":"Pluma" , "Color":"Negra" } ]};
  res.json(storeProducts);
}); 


/*
app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
}); */