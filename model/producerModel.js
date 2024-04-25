const mongoose = require('mongoose');

const producerSchema = new mongoose.Schema({
  producerName: { 
    type: String, 
    required: true 
  },
  bio: String
});

module.exports = mongoose.model('Producer', producerSchema);
