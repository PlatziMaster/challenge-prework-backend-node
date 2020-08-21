const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('LANDING PAGE');
});

app.get('/products', (req, res) => {
  res.json({
    products: ['ARRAY WITH SOME PRODUCTS']
  });
});

app.post('/products/:id', (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.send('SE CREA UN NUEVO PRODUCTO');
});

app.put('/products/:id', (req, res) => {
  console.log(req.body);
  res.send(`Product ${req.params.id} updated.`);
});

app.delete('/products/:id', (req, res) => {
  res.send(`Product ${req.params.id} deleted.`);
});


app.listen(4000, (err) => {
  if(err) { console.error(err); }
  else { console.log('Server is running PORT 4000') } 
});