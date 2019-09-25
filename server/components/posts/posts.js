const express = require('express');
const router = express.Router();

const fetchPosts = require('./controllers/fetchPosts');

// GET
router.get('/', fetchPosts);

module.exports = router;
