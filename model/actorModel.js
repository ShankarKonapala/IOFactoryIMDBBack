const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
  actorName: { 
    type: String, 
    required: true 
  },
  dob: Date,
  bio: String
});

const Actor = mongoose.model('Actor', actorSchema);

module.exports = Actor;
