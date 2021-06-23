const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const authMe = async(req, res, next) => {
    //res.send(req.header("Authorization"))
    try {
        const token = req.header('Authorization').replace('bearer ', '')
        const myDecodedToken = jwt.verify(token, process.env.JWTKEY)
        const user = await User.findOne({
            _id: myDecodedToken._id,
            'tokens.token': token
        })
        if (!user) throw new Error('not found user with this token')
        req.user = user
        req.token = token
        next()
    } catch (e) {
        res.send(e.message)
    }

}

module.exports = authMe