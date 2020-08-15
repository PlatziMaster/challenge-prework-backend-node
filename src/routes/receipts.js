'use strict'

const express = require('express')
const router = express.Router()
const path = require('path')

// the receipt route
router.get('/', (req, res) => {
  let file = path.join(__dirname, '../assets/receipt.pdf')
  res.sendFile(file)
})

module.exports = router
