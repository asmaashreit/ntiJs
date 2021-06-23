const express = require('express')
const hbs = require('hbs')
const app = express()
const path = require('path')
const myPuplicDir = path.join(__dirname, '../../task6')
const myViews = path.join(__dirname, '../views')
const myLayoutes = path.join(__dirname, '../layout')

//console.log(myViews)

app.set('view engine', 'hbs')
app.set('views', myViews)
hbs.registerPartials(myLayoutes)
app.use(express.static(myPuplicDir))

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/images', (req, res) => {
    fs = require('fs')
    data = JSON.parse(fs.readFileSync('data/all.json').toString())
    res.render('images', { data })
})


// app.get('/htmlFile', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'))
// })


app.listen(3000, () => {
    console.log('server on')
})