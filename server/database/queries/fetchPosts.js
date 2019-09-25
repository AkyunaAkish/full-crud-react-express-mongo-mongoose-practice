const Post = require('../models/post');

module.exports = () => {
    return Post.find({})
               .sort([ [ 'date', -1 ] ])
               .populate({ 
                   path: 'comments', 
                   options: { 
                       sort: '-date',
                    } 
                });
};