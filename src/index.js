const express = require('express');
const UsersController = require('./users/users.controller');

const app = express();
app.use(express.json());

const usersController = new UsersController();

app.post('/users', async (req, res) => {
  await usersController.createUser(req, res);
});

app.get('/users', async (req, res) => {
  await usersController.getUsers(req, res);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
