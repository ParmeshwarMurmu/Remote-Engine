const mongoose = require('mongoose')
require('dotenv').config()

// creating Connection 
const connection = mongoose.connect(process.env.mongoUrl)

module.exports = {
    connection
}


