teachModel = require('../models/teachers.model')

allTeacher = async(req, res) => {
    try {
        data = await teachModel.find()
        res.send(data)
    } catch (e) {
        res.send(e.message)
    }
}

singleTeacher = async(req, res) => {
    try {
        const data = await teachModel.findById()
        if (!data) res.send('not found Data')
        res.send(data)
    } catch (e) {
        res.send(e.message)
    }
}

module.exports = {
    allTeacher,
    singleTeacher
}