const Task = require('../models/Task')

// Controller for handling task-related requests
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
    res.status(200).json(tasks)
  } catch (error) {
    console.log('Error fetching tasks:', error)
  }
}

const addNewTask = async (req, res) => {
  console.log('Adding new task with data:', req.body)
  try {
    const newTask = new Task(req.body)
    const savedTask = await newTask.save()
    res.status(201).json({ message: 'Task added successfully', task: savedTask})
  } catch (error) {
    console.log('Error adding task:', error)
  }
}

module.exports = {
  getAllTasks,
  addNewTask
}