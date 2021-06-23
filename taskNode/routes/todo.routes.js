const express = require('express')
const router = new express.Router
const todoController = require('../controller/todoApp.controller')


app.get('/addArtical', todoController.addArticalController)
app.get('/showArticals', todoController.showAllArticalsController)
app.get('/showSingle/:id', todoController.showSingleArtical)
app.get('/delete/:id', todoController.deleteSingleArtical)

module.exports = router