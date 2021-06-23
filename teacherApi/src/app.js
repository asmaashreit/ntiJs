const express = require('express')
require('../db/db')

const teachRoutes = require('../routes/teachers.route')

const app = express()
app.use(express.json())

app.use(teachRoutes)

module.exports = app