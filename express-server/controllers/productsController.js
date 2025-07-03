// model
const Product = require('../models/Product')

// Controller for handling product-related requests
const getAllProducts = async (req, res) => {
  try {
    // query the database to get all products
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    console.log('Error fetching products:', error)
  }
}

// Add additional controller functions as needed

const addNewProduct = async (req, res) => {

  try {
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.status(201).json({ message: 'Product added successfully', product: newProduct})
  } catch (error) {
    console.log('Error adding product:', error)
  }
}

const updateProduct = async (req, res) => {
  console.log('Updating product with data:', req.body)
  try {
    const { id } = req.params
    const updatedProduct = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true }) // return the updated document

      console.log('Updated Product:', updatedProduct)

    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct })
  } catch (error) {
    console.log('Error updating product:', error)
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const deletedProduct = await Product.findOneAndDelete({ _id: id })

    // logic to handle if the product was not found or already deleted
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct })
  } catch (error) {
    console.log('Error deleting product:', error)
  }
}

// create a function for soft deleting products
const softDeleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const updatedProduct = await Product.findOneAndUpdate({ _id: id }, { isDeleted: true }, { new: true })  
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' })
    }
    res.status(200).json({ message: 'Product soft deleted successfully' })
  } catch (error) {
    
  }
}

module.exports = {
  getAllProducts,
  addNewProduct,
  updateProduct,
  deleteProduct,
  softDeleteProduct
}