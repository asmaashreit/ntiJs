const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/myNewG7', {})

const User = mongoose.model('User', {
    pass: {
        type: String,
        validate(value) {
            if (value.includes("123")) throw new Error('invalid error')
        }

    }
})

const data = new User({
    pass: '123hgf'
})

data.save().then(
    () => console.log('data inserted')
).catch((e) => { console.log(e) })