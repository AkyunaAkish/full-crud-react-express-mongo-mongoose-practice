const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author: String,
    content: String,
    date: Date,
    _post: { type: Schema.Types.ObjectId, ref: 'Post' },
});

const Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment;