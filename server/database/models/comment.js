const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author: String,
    content: String,
    date: Date,
});

const Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment;