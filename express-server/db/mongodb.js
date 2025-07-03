// create a MongoDB connection file
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = '<mongoDB_connection_string>';
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
}

module.exports = connectDB;