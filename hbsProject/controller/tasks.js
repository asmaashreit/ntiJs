taskHelper = require('../helper/myfunction.helper')

const addTask = (req, res) => {
    data = req.query
    data.id = Date.now()
    taskHelper.addTask(data)

    res.render('add', data)
}

const showData = (req, res) => {
    allData = taskHelper.readData()
    res.render('all', allDta)
}

module.exports = {
    addTask,
    showData
}