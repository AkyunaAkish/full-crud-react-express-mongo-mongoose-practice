const Post = require('../models/post');

module.exports = (id, updatedData) => {
    return Post.findOneAndUpdate({
        _id: id
    }, updatedData);    
};