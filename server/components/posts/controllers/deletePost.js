const asyncRoute = require('../../asyncRoute');
const deletePost = require('../../../database/queries/deletePost');

 const route = async (req, res) => {
	const deleteRes = await deletePost(req.params.id);
	res.json({ deleteRes });
};

module.exports = asyncRoute(route);