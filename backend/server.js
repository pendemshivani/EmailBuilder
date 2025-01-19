const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const emailRoutes = require('./routes/emailRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Debug: Log MongoDB URI
console.log('MongoDB URI:', process.env.MONGODB_URI);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    console.error('Full Error:', err);
  });

// Default route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Register routes
app.use('/api', emailRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
