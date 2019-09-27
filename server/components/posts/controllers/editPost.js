const asyncRoute = require('../../asyncRoute');
const editPost = require('../../../database/queries/editPost');

 const route = async (req, res) => {
	const editRes = await editPost(req.params.id, req.body);
	res.json({ editRes });
};

module.exports = asyncRoute(route);