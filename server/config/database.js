const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})

module.exports = mongoose