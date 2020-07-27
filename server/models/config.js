const mongoose = require('../config/database')
const configuration = mongoose.model('configuration', { 
  name: String,
  value: mongoose.Mixed,
  type: String
});

module.exports = configuration