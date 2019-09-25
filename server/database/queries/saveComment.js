const Comment = require('../models/comment');

module.exports = (data) => {
    const comment = new Comment(data);
    return comment.save();    
};