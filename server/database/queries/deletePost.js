const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports = (id) => {
    return Promise.all([
        Post.deleteOne({ _id: id }),
        Comment.deleteMany({ _post: id }),
    ]);
};