const mongoose = require('mongoose');

// Schema definition for Product
// This schema defines the structure of the Product documents in MongoDB
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    trim: true
  },
  isDeleted: {  
    type: Boolean,
    default: false // Indicates if the product is soft deleted
  },
  stock: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
}, {
  timestamps: true // Automatically manage createdAt and updatedAt fields
})

module.exports = mongoose.model('Product', productSchema);