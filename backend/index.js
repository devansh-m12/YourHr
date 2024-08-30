const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/yourhr')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// User model
const User = mongoose.model('User', {
  name: String,
  email: String,
  phone: String,
  address: String,
  education: String,
  experience: String,
  skills: String,
  jobPreference: String,
  resume: String,
});

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Routes
app.post('/api/signup', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, phone, address, education, experience, skills, jobPreference } = req.body;
    const resume = req.file ? req.file.path : '';

    const user = new User({ 
      name, 
      email, 
      phone, 
      address, 
      education, 
      experience, 
      skills, 
      jobPreference, 
      resume 
    });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});