const asyncRoute = require('../../asyncRoute');
const saveComment = require('../../../database/queries/saveComment');

 const route = async (req, res) => {
	const posts = await saveComment(req.params.id, req.body);
	res.json({ posts });
};

module.exports = asyncRoute(route);