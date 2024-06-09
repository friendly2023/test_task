const UsersService = require('./users.service');
const UserActionsController = require('./user-actions.controller');

class UsersController {
  constructor() {
    this.usersService = new UsersService();
    this.userActionsController = new UserActionsController();
  }

  async createUser(req, res) {
    try {
      const { name, email } = req.body;
      const newUserID = await this.usersService.createUser(req.body);
      const actions = await this.userActionsController.createUserAction(newUserID, 'создан');
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
      const usersCreate = await this.usersService.editingUser(req.body);
      const actions = await this.userActionsController.createUserAction(id, 'изменен');
      res.render('editing-user-ready', { name }); // Отображаем страницу успешного создания пользователя
    } else {
      console.log('User data с ошибкой:', { id, name, email });
      res.status(500).json('Ошибка страницы при редактировании пользователя');
    }
  }

  async getUsers(req, res) {
    const users = await this.usersService.getUsers();
    res.render('get-users', { users });
  }

}

module.exports = UsersController;
