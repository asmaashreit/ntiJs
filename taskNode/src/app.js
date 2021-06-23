const express = require('express')
const hbs = require('hbs')
const path = require('path')
const todoRoutes = require('../routes/todo.routes')


const frontendDir = path.join(__dirname, '../frontend')
const viewsDir = path.join(__dirname, '../hbs/views')
const layoutsDir = path.join(__dirname, '../hbs/layouts')

const app = express()
app.set('view engine', 'hbs')

app.use(express.static(frontendDir))
app.set('views', viewsDir)
hbs.registerPartials(layoutsDir)

app.use(todoRoutes)


module.exports = app