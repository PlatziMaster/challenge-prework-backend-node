require('dotenv').config()

const config = {
    port: process.env.PORT || 500,
}

module.exports = { config }