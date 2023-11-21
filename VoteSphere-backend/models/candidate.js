const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  party: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  networth: {
    type: Number,
    required: true,
  },
  image:{
    type: String,
    required:true
  },
  votes:{
    type: Number,
  },
  Date:{
    type: Date,
    default: Date.now,
  }
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
