const express = require('express')
const path = require('path')
const hbs = require('hbs')
const userRoutes = require('../routes/users.routes')
const { urlencoded } = require('express')

const app = express()

app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, '../public')))

hbs.registerPartials(path.join(__dirname, '../frontend/layouts'))

app.set('views', path.join(__dirname, '../frontend/views'))
app.use(express.urlencoded())
app.use(userRoutes)

module.exports = app