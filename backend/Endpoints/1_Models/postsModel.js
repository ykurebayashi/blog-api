const connection = require('../../Connection/connection');

// Get posts, here we use the connection created at the connection file to execute query, the return is everything the query returns
const getAllPosts = async () => {
  const [posts] = await connection.execute(
    'SELECT * FROM test_database.blogposts'
  );
  return posts;
};

// Get one single post, here we use the connection created at the connection file to execute query, the return is everything the query returns
const getSinglePost = async (id) => {
  const [post] = await connection.execute(
    `SELECT * FROM blogposts WHERE PostID LIKE ${id} LIMIT 1`
  );
  return post;
};

module.exports = { getAllPosts, getSinglePost };
