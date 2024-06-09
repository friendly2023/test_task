const UsersService = require('./users.service');

class UsersController {
  constructor() {
    this.usersService = new UsersService();
  }

  async createUser(req, res) {
    try {
      const { name, email } = req.body;
      console.log('User data:', { name, email });
      const usersCreate = await this.usersService.createUser(req.body);
      res.render('create-users-ready', { name }); // Отображаем страницу успешного создания пользователя
    } catch (error) {
      console.error('Ошибка страницы при создании пользователя:', error);
      res.status(500).json('Ошибка страницы при создании пользователя. Пользователь с указаным email уже существует');
    }
  }  

  async editingUser(req, res) {
    const { id, name, email } = req.body;
    const check = await this.usersService.check(req.body);

    if (check == 1) {
      console.log('User data:', { id, name, email });
      const usersCreate = await this.usersService.editingUser(req.body);
      res.render('editing-user-ready', { name }); // Отображаем страницу успешного создания пользователя
    } else {
      console.log('User data с ошибкой:', { id, name, email });
      res.status(500).json('Ошибка страницы при редактировании пользователя');
    }
  }

  async getUsers(req, res) {
    const users = await this.usersService.getUsers();
    res.status(200).json(users);
  }

}

module.exports = UsersController;
