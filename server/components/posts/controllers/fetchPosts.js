const asyncRoute = require('../../asyncRoute');
const fetchPosts = require('../../../database/queries/fetchPosts');

 const route = async (req, res) => {
	const posts = await fetchPosts();
	res.json({ posts });
};

module.exports = asyncRoute(route);
