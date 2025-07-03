const express = require('express')
const router = express.Router()
const { getAllTasks, addNewTask } = require('../controllers/tasksController')

router.get('/all', getAllTasks)
router.post('/add', addNewTask)


module.exports = router;