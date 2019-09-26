const asyncRoute = require('../../asyncRoute');
const deleteComment = require('../../../database/queries/deleteComment');

 const route = async (req, res) => {
	const deleteRes = await deleteComment(req.params.postId, req.params.commentId);
	res.json({ deleteRes });
};

module.exports = asyncRoute(route);
