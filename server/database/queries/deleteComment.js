const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports = (postId, commentId) => {
    return Promise.all([
        Post.update({ 
            _id: postId 
        }, 
        { 
            $pull: { 
                comments: commentId
            } 
        }),
        Comment.deleteOne({ _id: commentId }),
    ]);
};