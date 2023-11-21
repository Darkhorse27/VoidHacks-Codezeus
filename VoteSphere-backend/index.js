const express = require('express');
const mongoose = require('mongoose');
const Candidate = require('./models/candidate') // Adjust the path based on your project structure
const User = require('./models/user');


const uri = "mongodb+srv://0009darkhorse:BRyNJW53QRBlRwoz@vh.b0tufmu.mongodb.net/?retryWrites=true&w=majority";
const port = 5000;

const app = express();

app.use(express.json());


// Connect to MongoDB using Mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Check for successful connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Create a new candidate
app.post('/candidates', async (req, res) => {
  try {
    const newCandidate = new Candidate({
      name: req.body.name,
      party: req.body.party,
      position: req.body.position,
      qualification: req.body.qualification,
      location: req.body.location,
      networth: req.body.networth,
      image: req.body.image || null,
    });

    const savedCandidate = await newCandidate.save();
    res.json(savedCandidate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fetching the Candidates :- 
app.get('/all-candidates', async (req, res) => {
  try {
    const allCandidates = await Candidate.find();
    res.json(allCandidates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// FETCHING THE CANDIDATES ON THE BASIS OF NAME or UID
app.get('/all-candidates/:nameOrUid', async (req, res) => {
  try {
    const { nameOrUid } = req.params;

    // Use a regular expression to make a case-insensitive search
    const candidates = await Candidate.find({
      $or: [
        { name: { $regex: new RegExp(nameOrUid, 'i') } },
        { _id: nameOrUid },
      ],
    });

    res.json(candidates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// VOTER OR USER MODEL :- 

// Create a new user
app.post('/create-users', async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      aadhar: req.body.aadhar,
      contact: req.body.contact,
      voterId: req.body.voterId,
      mobileNo: req.body.mobileNo,
      yearOfBirth: req.body.yearOfBirth,
      gender: req.body.gender,
      location: req.body.location,
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fetching all users
app.get('/all-users', async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fetching a user based on voter ID
app.get('/all-users/:voterId', async (req, res) => {
  try {
    const { voterId } = req.params;
    const user = await User.findOne({ voterId });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
