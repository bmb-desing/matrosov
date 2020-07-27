const mongoose = require('../config/database')
const clients = mongoose.model('clients', { 
  name: String,
  image: String,
});

module.exports = clients