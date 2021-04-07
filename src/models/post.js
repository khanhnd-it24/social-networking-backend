const mongoose = require('mongoose');

// User Schema
const postSchema = new mongoose.Schema({
    text: {
        type: String
    },
    imgs : [
        {
            type: String
        }
    ],
    liked: {
        type: Number
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date
    }
});

module.exports = mongoose.model('Post', postSchema);