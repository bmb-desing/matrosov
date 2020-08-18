const database = require('../config/database')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const clientsSchema = new Schema({ 
  name: String,
  image: String,
  created_at: {
    type: Date,
    default: function(){
      return Date.now();
    }
  },
  updated_at: {
    type: Date,
    default: function(){
      return Date.now();
    }
  }
});
clientsSchema.pre('save', function(done) {
  this.updated_at = Date.now();
  done();
});

const Clients = database.model('clients', clientsSchema)
module.exports = Clients