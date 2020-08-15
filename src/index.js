'use strict'

require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// parse json and urlencoded from to body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// import routes pages
app.use('/', require('./routes/home'))
app.use('/receipts', require('./routes/receipts'))
app.use('/products', require('./routes/products'))

app.use('/', (req, res) => {
  res.status(404).send('Not Found')
})

// initialize server on port
app.listen(port, (err) => {
  if (err) {
    console.error('Error: ', err)
    return
  }
  console.log(`Listening http://localhost:${port}`)
})
