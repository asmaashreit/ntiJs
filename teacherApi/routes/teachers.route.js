const express = require('express')
const router = new express.Router()
const techController = require('../controller/teachers.controller')
const teachModel = require('../models/teachers.model')

router.post('/register', async(req, res) => {
    try {
        teacher = new teachModel(req.body)
        await teacher.save()
        res.send('done')
    } catch (e) {
        res.send(e.message)
    }
})

router.get('/all', techController.allTeacher)

// router.get('/all', async(req, res) => {
//     try {
//         const data = await teachModel.find()
//         res.send(data)
//     } catch (e) {
//         res.send(e.message)
//     }
// })

router.get('/single/:id', techController.singleTeacher)

router.delete('/all/:id', async(req, res) => {
    const _id = req.params.id
    try {
        const data = await teachModel.findById(_id)
        if (!data) res.send('not found Data to deleted')
        res.send('deleted')
    } catch (e) {
        res.send(e.message)
    }
})

module.exports = router