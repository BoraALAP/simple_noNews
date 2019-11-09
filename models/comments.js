const mongoose = require('mongoose')

const CommentSchema = mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    id:{
        type: String,
        required:true
    },
    articleId:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('comment', CommentSchema)