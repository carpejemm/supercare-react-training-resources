const express = require('express');
// express router is used to create modular, mountable route handlers
const router = express.Router();
// Import the controller function for getting all products
const { 
  getAllProducts, 
  addNewProduct, 
  updateProduct, 
  deleteProduct, 
  softDeleteProduct 
} = require('../controllers/productsController');
const { getAllTasks } = require('../controllers/tasksController')


// all related routes for products will be defined here

// /api/v1/products/all
// router.get('/all', getAllProducts);
router.post('/add', addNewProduct);
router.patch('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct); 
router.patch('/soft-delete/:id', softDeleteProduct);

router.get('/aall', getAllProducts);

router.get('/all', getAllProducts);



module.exports = router;

