const express = require('express')
const router = new express.Router()
const taskController = require('../controller/tasks')

router.get('/add', taskController.addTask)
router.get('/all', taskController.showData)

module.exports = router