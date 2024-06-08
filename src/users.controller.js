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
      res.render('success', { name }); // Отображаем страницу успешного создания пользователя
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Error creating user' });
    }
  }  

  async getUsers(req, res) {
    const users = await this.usersService.getUsers();
    res.status(200).json(users);
  }

}

module.exports = UsersController;
