const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
const productRoutes = require('./src/routes/products');
const authRoutes = require('./src/routes/auth');
app.use('/api', productRoutes);
app.use('/seller', authRoutes);

// Connect to MongoDB
const MONGODB_URI = 'mongodb+srv://nihar:abcd12345@cluster0.4jfpspv.mongodb.net/temp?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to MongoDB');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
