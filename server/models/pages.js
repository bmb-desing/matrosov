const mongoose = require('../config/database')
const pages = mongoose.model('pages', { 
  title: String,
  content: mongoose.Mixed,
  description: String,
  image: String,
  keywords: String,
  alias: {
    type: String,
    unique: true,
    lowercase: true
  }
});

module.exports = pages