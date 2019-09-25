const asyncRoute = require('../../asyncRoute');
const savePost = require('../../../database/queries/savePost');

 const route = async (req, res) => {
	const posts = await savePost(req.body);
	res.json({ posts });
};

module.exports = asyncRoute(route);
