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
      res.status(500).json({ message: 'Ошибка страницы при создании пользователя' });
    }
  }  

  async editingUser(req, res) {
    try {
      const { id, name, email } = req.body;
      console.log('User data:', { id, name, email });
      const usersCreate = await this.usersService.editingUser(req.body);
      res.render('editing-user-ready', { name }); // Отображаем страницу успешного создания пользователя
    } catch (error) {
      console.error('Ошибка страницы при редактировании пользователя:', error);
      res.status(500).json({ message: 'Ошибка страницы при редактировании пользователя' });
    }
  }

  async getUsers(req, res) {
    const users = await this.usersService.getUsers();
    res.status(200).json(users);
  }

}

module.exports = UsersController;
