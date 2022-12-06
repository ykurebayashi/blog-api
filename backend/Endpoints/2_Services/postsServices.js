const models = require('../1_Models/postsModel');

const getAllPostsService = async () => {
  const posts = await models.getAllPosts();
  return posts;
};

const getSinglePostService = async (id) => {
  const post = await models.getSinglePost(id);
  return post;
};

module.exports = { getAllPostsService, getSinglePostService };
