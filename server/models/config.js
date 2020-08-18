const database = require('../config/database')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const configurationSchema = new Schema({ 
  name: String,
  value: mongoose.Mixed,
  type: String,
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
configurationSchema.pre('save', function(done) {
  this.updated_at = Date.now();
  done();
});

const configuration = database.model('config', configurationSchema)

module.exports = configuration