'use strict';
const express = require ('express');
const app = express();

app.use ('/', (req,res) =>{
    res.status(200).send('La API funciona correctamente')
});

app.listen(3000);
