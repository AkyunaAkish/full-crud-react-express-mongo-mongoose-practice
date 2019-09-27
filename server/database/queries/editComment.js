const Comment = require('../models/comment');

module.exports = (postId, commentId, updatedData) => {
    return Comment.findOneAndUpdate({
        _id: commentId,
        _post: postId
    }, updatedData);    
};