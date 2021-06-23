const mongoose = require('mongoose')
const validator = require('validator')

const Teacher = mongoose.model('Teacher', {
    teachName: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        lowercase: true
    },
    salary: {
        type: Number,
        trim: true,
        required: true
    },
    classes: [{
        class: { type: String },
        subject: { type: String }
    }]


})

module.exports = Teacher