const express = require('express');
const router = express.Router();

const fetchPosts = require('./controllers/fetchPosts');
const createPost = require('./controllers/createPost');
const createComment = require('./controllers/createComment');
const deletePost = require('./controllers/deletePost');
const deleteComment = require('./controllers/deleteComment');

// GET
router.get('/', fetchPosts);

// POST
router.post('/', createPost);
router.post('/:id/comments', createComment);

// DELETE
router.delete('/:id', deletePost);
router.delete('/:postId/comments/:commentId', deleteComment);

module.exports = router;
