'use strict'

const express = require('express')
const router = express.Router()

// home page route
router.get('/', function (req, res) {
  let userInfo = req.header('user-agent')
  res.send(`UserInfo: ${userInfo}`)
})

module.exports = router
