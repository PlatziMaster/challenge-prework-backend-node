const express = require('express');

const app = express();

app.get('*', () => {
  res.send('Hello world');
});

app.listen(4000, (err) => {
  if(err) { console.error(err); }
  else { console.log('Server is running PORT 4000') } 
})