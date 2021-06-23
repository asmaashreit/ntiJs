const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()

app.set('view engine', 'hbs')

const taskController = require('../controllers/tasks')
const publicDir = path.join(__dirname, '../resources/frontend')
const viewsDir = path.join(__dirname, '../resources/views')
const layoutsDir = path.join(__dirname, '../resources/layouts')
    //console.log(viewsDir)

hbs.registerPartials(layoutsDir)

const todo = require('../controllers/todoApp.controller')

app.use(express.static(publicDir))
app.set('views', viewsDir)

app.get('/addTask', todo.addTaskController)
app.get('/addTask', todo.showAllTasksController)

app.get('', (req, res) => {
    resData = {
        pageTitle: "home page",
        err: false,
        tasks: null
    }
    taskController.taskApi((err, data) => {
        if (err) resData.err = true
        else resData.tasks = data
        res.render('index', resData)
    })
})
module.exports = app