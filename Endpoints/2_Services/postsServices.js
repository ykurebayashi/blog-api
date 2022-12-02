const models = require('../1_Models/postsModel');

const getAllPostsService = async () => {
  const posts = await models.getAllPosts();
  return posts;
};

module.exports = { getAllPostsService };
