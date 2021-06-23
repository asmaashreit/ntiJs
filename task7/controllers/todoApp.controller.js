const request = require('request')

fs = require('fs')
readData = () => {
    try {
        data = JSON.parse(fs.readFileSync('tasks.json').toString())
    } catch (e) {
        add = []
    }
    return data
}

writeData = (data) => {
    try {
        fs.writeFileSync('tasks.json', JSON.stringify(data))
    } catch (e) {
        fs.writeFileSync('tasks.json', '[]')
    }
}

addTaskController = (req, res) => {
    task = {
        name: '',
        content: ''
    }
    if (req.query.name == '' || req.query.content == '') {
        task = req.query
    }
    if (req.query.name && req.query.content) {
        addTask(req.query)
        res.redirect('/addTask')
    }
}

showAllTasksController = (req, res) => {
    data = {
        pageTitle: 'show All Tasks',
        data: readData()
    }
    res.render('allTasks', data)
}

module.exports = {
    addTaskController,
    showAllTasksController
}