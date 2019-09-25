const Post = require('../models/post');

module.exports = (data) => {
    const post = new Post({ ...data, date: new Date() });
    return post.save();    
};