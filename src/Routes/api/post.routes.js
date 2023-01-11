const express = require('express');
const { indexPosts, createPost, indexPostsReversed, showPost, updatePost, deletePost } = require('../../Controller/post.controller');
const createPostValidator = require('../../Middleware/post/create.middleware');
const postIdValidator = require('../../Middleware/post/id.middleware');
const updatePostValidator = require('../../Middleware/post/update.middleware');
const postRoute = express.Router();

postRoute.route('/').get(indexPosts).post(createPostValidator, createPost);

postRoute.route('/reversed').get(indexPostsReversed);

postRoute.route('/:id')
    .get(postIdValidator, showPost)
    .put(updatePostValidator, updatePost)
    .delete(postIdValidator, deletePost);

module.exports = postRoute;
