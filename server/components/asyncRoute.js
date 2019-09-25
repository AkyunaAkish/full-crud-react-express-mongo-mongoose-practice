// handles express routes using async/await to ensure errors get logged
const asyncRoute = route => (req, res, next = console.error) =>
  Promise.resolve(route(req, res)).catch(next);

module.exports = asyncRoute;