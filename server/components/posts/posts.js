const express = require('express');
const router = express.Router();

const fetchPosts = require('./controllers/fetchPosts');
const createPost = require('./controllers/createPost');
const createComment = require('./controllers/createComment');

// GET
router.get('/', fetchPosts);

// POST
router.post('/', createPost);
router.post('/:id/comments', createComment);

module.exports = router;
