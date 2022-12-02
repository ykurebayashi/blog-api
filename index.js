const express = require('express');
const bodyParser = require('body-parser');
const postsController = require('./Endpoints/3_Controller/postsController');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Debug that the server is running
app.listen(3001, () => {
  console.log(process.env.MYSQL_PASSWORD);
  console.log('O app está rodando na porta 3001');
});

// Get all posts endpoint
app.get('/', postsController.getAllPostsController);
