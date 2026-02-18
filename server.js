const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Import the tables we created
const { User, Item, Transaction } = require('./models');

const app = express();

// --- MIDDLEWARE ---
app.use(express.json()); 
app.use(cors()); 

// --- DATABASE CONNECTION ---
// 👇👇 IMPORTANT: Replace 'REPLACE_WITH_REAL_PASSWORD' with your actual password below 👇👇
const MONGO_URI = 'mongodb+srv://tuanammar050_db_user:Cd7fdd2903**@cluster0.advlupt.mongodb.net/?appName=Cluster0';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected!'))
  .catch(err => console.log('❌ DB Connection Error:', err));


// --- ROUTES ---

// 1. TEST ROUTE
app.get('/', (req, res) => {
  res.send('Server is Running! Marketplace API is active.');
});

// 2. REGISTER USER
app.post('/api/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.json({ message: "User registered successfully!", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Error registering user", details: error.message });
  }
});

// 3. LOGIN USER
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, 'SECRET_KEY_123'); 
    
    res.json({ token, user: { id: user._id, username: user.username, balance: user.balance } });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

// --- START SERVER ---
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));