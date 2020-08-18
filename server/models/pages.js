const mongoose = require('mongoose')
const Schema = mongoose.Schema
const database = require('../config/database')
const pagesSchema = new Schema({ 
  title: String,
  content: mongoose.Mixed,
  description: String,
  image: String,
  keywords: String,
  alias: {
    type: String,
    unique: true,
    lowercase: true
  },
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

pagesSchema.pre('save', function(done) {
  this.updated_at = Date.now();
  done();
});

const Pages = database.model('pages', pagesSchema)

module.exports = Pages