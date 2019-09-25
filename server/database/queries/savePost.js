const Post = require('../models/post');

module.exports = (data) => {
    const post = new Post(data);
    return post.save();    
};