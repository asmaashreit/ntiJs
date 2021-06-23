const express = require('express')
const router = new express.Router()

const userModel = require('../models/user.model')

//const userController = require('../controller/users.controller')

// router.post('/add', (req, res) => {
//     let me = new userModel(req.body)
//     res.send(me)
//     me.save().then(
//         () => res.send('done')
//     ).catch((e) => res.send(e))

// })

router.post('/register', async(req, res) => {
    try {
        me = new userModel(req, res)
        await me.save()
        res.send('inserted')
    } catch (e) {
        res.send(e)
    }
})

router.get('/add', async(req, res) => {
    try {
        const data = await userModel.find()
        res.send(data)
    } catch (e) {
        res.send(e)
    }
})

module.exports = router