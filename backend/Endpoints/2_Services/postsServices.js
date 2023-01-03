const models = require('../1_Models/postsModel');

const getAllPostsService = async () => {
  const posts = await models.getAllPosts();
  return posts;
};

const getSinglePostService = async (id) => {
  const post = await models.getSinglePost(id);
  return post;
};

const createSinglePostService = async (values) => {
  const create = await models.createSinglePost(values);
  return create;
};

module.exports = {
  getAllPostsService,
  getSinglePostService,
  createSinglePostService,
};
