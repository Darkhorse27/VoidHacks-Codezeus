const mongoose = require('mongoose');

const VoterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  aadhar: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: String,
    required: true,
  },
  voterId: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  yearOfBirth: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  }
});

const User = mongoose.model('Voters', VoterSchema);

module.exports = User;
