const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer'); // New: For handling files
const cloudinary = require('cloudinary').v2; // New: For cloud storage
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 1. Configure Cloudinary (Replace with YOUR actual keys)
cloudinary.config({
  cloud_name: 'YOUR_CLOUD_NAME_HERE', 
  api_key: 'YOUR_API_KEY_HERE', 
  api_secret: 'YOUR_API_SECRET_HERE' 
});

// 2. Configure Multer (Use Memory Storage for Vercel)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Database Connection
mongoose.connect('YOUR_MONGODB_CONNECTION_STRING_HERE')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Product Schema
const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  imageUrl: String, // New: We store the LINK, not the file
});
const Product = mongoose.model('Product', ProductSchema);

// 3. The Upload Route (Magic happens here)
app.post('/api/products', upload.single('image'), async (req, res) => {
  try {
    // If no file is uploaded, skip
    let imageUrl = "";
    
    if (req.file) {
      // Convert buffer to Base64 and upload to Cloudinary
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      
      const cldRes = await cloudinary.uploader.upload(dataURI, {
        resource_type: "auto",
      });
      imageUrl = cldRes.secure_url; // This is the link we want!
    }

    // Save to Database
    const newProduct = new Product({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      imageUrl: imageUrl // Save the link
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Upload failed' });
  }
});

// 4. Get Route
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Export for Vercel
module.exports = app;