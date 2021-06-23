const express = require('express')
require('../db/db')
const userRoutes = require('../routes/user.routes')
const app = express()
app.use(express.json())
app.use(userRoutes)
module.exports = app