const mongoose = require('mongoose')
const Schema = mongoose.Schema

const database = require('../config/database')

const teamSchema = new Schema({ 
  alias: {
    unique: true,
    type: String,
    required: true
  },
  sort: {
    type: Number,
    default: 0
  },
  name: String,
  image: String,
  job: String,
  content: {
    type: Schema.Types.Mixed
  },
  head: {
    title: String,
    description: String,
    image: String,
    keywords: String,
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
})
teamSchema.pre('save', function(done) {
  this.updated_at = Date.now();
  done();
});

const Team = database.model('teams', teamSchema)
module.exports = Team