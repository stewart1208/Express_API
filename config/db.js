const mongoose = require('mongoose');
const env = require('../config/env')

const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
module.exports = connectDB;
