const express = require('express')

const hbs = require('hbs')

const path = require('path')

const todoRoutes = require('../routes/todoRoutes')

const app = express()

app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, '../frontend')))
app.set('views', path.join(__dirname, '../resources/views'))
hbs.registerPartials(path.join(__dirname, '../resources/layouts'))

app.use(todoRoutes)

module.exports = app