const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: User
    },
    postType: {
        type: String,
        enum: ['txt', 'img', 'vid'],
        required: true
    },
    content: { type: String, trim: true, default: true },
    image: { type: String, trim: true, default: true },
    numOfLikes: { type: Number, default: 0 },
    comments: [{
        friend_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }
    }]
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)
module.exports = Post