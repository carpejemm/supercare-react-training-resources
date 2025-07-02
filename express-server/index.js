const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const port = 3000

// Import MongoDB connection
const connectDB = require('./db/mongodb')
connectDB() // Uncomment this line to connect to MongoDB

// Middleware to parse JSON bodies
app.use(express.json())
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }))
// Middleware for CORS
app.use(cors())
// Middleware for logging HTTP requests
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/v1/products', (req, res) => {
  res.json([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 }
  ])
})

app.post('/api/v1/products', (req, res) => {
  console.log('Received new product:', req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//mongodb+srv://jemlaguda:jem12345@cluster0.c2ejt6u.mongodb.net/