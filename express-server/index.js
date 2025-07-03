// express framework
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const port = 8000

const productsRoutes = require('./routes/productsRoutes')
const tasksRoutes = require('./routes/tasksRoutes')

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

// app.get('/api/v1/products', (req, res) => {
//   res.json([
//     { id: 1, name: 'Product 1', price: 100 },
//     { id: 2, name: 'Product 2', price: 200 },
//     { id: 3, name: 'Product 3', price: 300 }
//   ])
// })

// app.post('/api/v1/products', (req, res) => {
//   console.log('Received new product:', req.body)
// })

// middleware to handle all product-related routes
app.use('/api/v1/products', productsRoutes)
app.use('/api/v1/tasks', tasksRoutes)
// app.use('/api/v1/tasks', tasksRoutes)
// app.use('/api/v1/users', productsRoutes)
// app.use('/api/v1/shipments', productsRoutes)

// app.use('/test', (req, res) => {
//   res.json({ message: 'Test route is working!' })
// })



app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

app.listen(port, () => {
  console.log(`App is runnning in ${port}`)
})

// MVC Architecture
// This is a simple Express server setup with MongoDB connection
// Models - Mongoose schemas and models for MongoDB
// Views - React, Angular, Vue.js, etc.
// Controllers - Express routes handling the logic
