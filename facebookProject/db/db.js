const mongoose = require('mongoose')
try {
    mongoose.connect(process.env.DBURL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    })
} catch (e) {
    console.log(e)
}