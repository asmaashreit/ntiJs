const mongoose = require('mongoose')
const validator = require('validator')
const User = mongoose.model('User', {
    userName: {
        type: String,
        trim: true,
        lowerCase: true,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validator(value) {
            if (!validator.isEmail(value)) throw new Error('invalide email')
        }
    },
    createAt: {
        type: Date,
        default: new Date()
    },
    gender: {
        type: String,
        trim: true,
        enum: ['male', 'female']
    },
    status: {
        type: Boolean,
        default: false
    }
})
module.exports = User