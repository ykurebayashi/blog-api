const connection = require('../../Connection/connection');

// Get posts, here we use the connection created at the connection file to execute query, the return is everything the query returns
const getAllPosts = async () => {
  const [posts] = await connection.execute(
    'SELECT * FROM test_database.persons '
  );
  return posts;
};

module.exports = { getAllPosts };
