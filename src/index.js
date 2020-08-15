const { config } = require('./config/index');
const productsApi = require('./routes/products');

const express = require('express'),
  path = require('path'),
  app = express(),
  port = config.port || 3000;

// Body parser
app.use(express.json());

//Routes
productsApi(app);

// Homer User Info
app.get('/', (req, res) => {
  let userInfo = req.header('user-agent');
  res.send(`UserInfo: ${userInfo}`);
});

// Show the file

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, 'assets/receipt.pdf');
  res.sendFile(file);
});

//  Listen the server

app.listen(port, (err) => {
  if (err) {
    console.error('Error: ', err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});
