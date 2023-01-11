const PostModel = require("../Database/post.model");

const model = new PostModel();

const createPost = async (req, res, next) => {
  try {
    const post = res.locals.post;
    const p = model.createPost(post);
    return res.status(200).json({
      status: 200,
      message: "Post created successfully",
      data: p,
    });
  } catch (error) {
    next(error);
  }
};
const showPost = async (req, res, next) => {
  try {
    const post = model.getPostById(res.locals.id);
    res.status(200).json({
      status: 200,
      message: "retrive Post successfully",
      data: post,
    });
  } catch (error) {
    next(error);
  }
};
const indexPosts = async (req, res, next) => {
  try {
    const posts = model.indexPosts();
    res.status(200).json({
      status: 200,
      message: "indexed all Posts successfully",
      data: posts,
    });
  } catch (error) {
    next(error);
  }
};

const indexPostsReversed = async (req, res, next) => {
  try {
    const post = model.indexPostsReversed();
    res.status(200).json({
      status: 200,
      message: "indexed all Posts reversed successfully",
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const post = model.updatePost(res.locals.post);
    res.status(200).json({
      status: 200,
      message: "updateed Post successfully",
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const post = model.deletePost(res.locals.id);
    res.status(200).json({
      status: 200,
      message: "deleted Post successfully",
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  indexPosts,
  showPost,
  updatePost,
  deletePost,
  indexPostsReversed,
};
