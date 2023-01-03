const postsServices = require('../2_Services/postsServices');

// Here's the controller section where we handle the req and res returning the success status or the error along with the element
const getAllPostsController = async (_req, res) => {
  try {
    const posts = await postsServices.getAllPostsService();
    return res.status(200).json(posts.reverse());
  } catch (error) {
    return error;
  }
};

// Here's the controller section where we handle the req and res returning the success status or the error along with the element
const getSinglePostController = async (_req, res) => {
  const { id } = _req.params;

  try {
    const posts = await postsServices.getSinglePostService(id);
    return res.status(200).json(posts);
  } catch (error) {
    return error;
  }
};

// Here's the controller section where we handle the req and res returning the success status or the error along with the element
const createSinglePostController = async (_req, res) => {
  try {
    const data = _req.body;
    await postsServices.createSinglePostService(data);
    return res.status(200).json();
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPostsController,
  getSinglePostController,
  createSinglePostController,
};
