const express = require('express')
const userRoutes = require('../routes/user.routes')
require('../db/db')

const app = express()

app.use(express.json())
app.use(userRoutes)

module.exports = app