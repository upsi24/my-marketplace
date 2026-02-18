// models.js
const mongoose = require('mongoose');

// 1. User Schema (Who is buying/selling?)
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }, // We will hash this later
  balance: { type: Number, default: 0 }, // Their wallet money
});

// 2. Item Schema (The Ad)
const ItemSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  image: String, // URL to the image
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, default: 'AVAILABLE' } // AVAILABLE, SOLD
});

// 3. Transaction Schema (The Middleman/Escrow Logic)
const TransactionSchema = new mongoose.Schema({
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  status: { type: String, default: 'HELD_IN_ESCROW' }, 
  // Statuses: HELD_IN_ESCROW -> SHIPPED -> COMPLETED -> CANCELLED
  trackingNumber: String
});

module.exports = {
  User: mongoose.model('User', UserSchema),
  Item: mongoose.model('Item', ItemSchema),
  Transaction: mongoose.model('Transaction', TransactionSchema)
};