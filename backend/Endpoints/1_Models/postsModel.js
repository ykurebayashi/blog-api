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

// Create a post
const createSinglePost = async ({
  title,
  content,
  author,
  category,
  excerpt,
  postimage,
}) => {
  const result = await connection.execute(
    `
    INSERT INTO test_database.blogposts (PostTitle, PostContent, Excerpt, Author, Category, PostImage)
    VALUES (?, "${content}", ?, ?, ?, ?);`,
    [title, excerpt, author, category, postimage]
  );
  return result;
};

module.exports = { getAllPosts, getSinglePost, createSinglePost };
