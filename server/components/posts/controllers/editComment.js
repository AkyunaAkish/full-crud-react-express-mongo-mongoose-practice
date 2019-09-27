const asyncRoute = require('../../asyncRoute');
const editComment = require('../../../database/queries/editComment');

 const route = async (req, res) => {
	const editRes = await editComment(req.params.postId, req.params.commentId, req.body);
	res.json({ editRes });
};

module.exports = asyncRoute(route);
