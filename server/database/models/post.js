const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// eslint-disable-next-line
const CommentSchema = require('./comment');

const PostSchema = new Schema({
    title: String,
    author: String,
    content: String,
    date: Date,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }]
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;