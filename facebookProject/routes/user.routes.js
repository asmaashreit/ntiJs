const express = require('express')
const router = new express.Router()

const User = require('../models/user.model')

const authMe = require('../middleware/auth')

router.post('/user/register', async(req, res) => {
    try {
        let user = new User(req.body)
        await user.save()
        res.send('data inserted')
    } catch (e) {
        res.send(e.message)
    }
})

router.get('/user/all', async(req, res) => {
    try {
        const users = await User.find()
        res.send({ users })
    } catch (e) {
        res.send(e.message)
    }
})

router.post('/user/login', async(req, res) => {
    try {
        const user = await User.logMeOn(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.send(e.message)
    }
})

router.get('/me', authMe, (req, res) => {
    res.send({ user: req.user, token: req.token })
})

router.post('/logout', authMe, async(req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(el => {
            return el.token != req.token
        })
        await req.user.save()
        res.send('logged out')
    } catch (e) {
        res.send(e.message)
    }
})

router.post('/logoutAll', authMe, async(req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send('logged out All')
    } catch (e) {
        res.send(e.message)
    }
})

module.exports = router