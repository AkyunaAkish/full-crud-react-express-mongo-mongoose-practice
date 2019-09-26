const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports = async (postId, data) => {
    // create new comment object
    const comment = new Comment({ ...data, _post: postId, date: new Date() });
    
    // save comment to mongo
    // eslint-disable-next-line
    const commentSave = await comment.save();

    // get post that comment is for
    const post = await Post.findOne({ _id: postId });

    // add new comment to existing comments
    const comments = [ ...post.comments, comment ];

    // update post with proper comment reference
    return post.update({ comments });
};