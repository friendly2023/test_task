const express = require('express');
const UsersController = require('./users.controller');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const usersController = new UsersController();


app.get('/', (req, res) => {
    res.render('main-page');
  });


app.get('/users/create', (req, res) => {
    res.render('create-users');
  });

app.post('/users/create', async (req, res) => {
    await usersController.createUser(req, res);
  });


app.get('/users/editing', (req, res) => {
    res.render('editing-user');
});

app.post('/users/editing', async (req, res) => {
    await usersController.editingUser(req, res);
}); 


app.get('/users', async (req, res) => {
    await usersController.getUsers(req, res);
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
