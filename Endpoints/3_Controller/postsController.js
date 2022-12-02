const postsServices = require('../2_Services/postsServices');

// Here's the controller section where we handle the req and res returning the success status or the error along with the element
const getAllPostsController = async (_req, res) => {
  try {
    const posts = await postsServices.getAllPostsService();
    return res.status(200).json(posts);
  } catch (error) {
    return error;
  }
};

module.exports = { getAllPostsController };
