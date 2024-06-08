const UsersService = require('./users.service');

class UsersController {
  constructor() {
    this.usersService = new UsersService();
  }

  async createUser(req, res) {
    const { name, email } = req.body;
    const newUser = await this.usersService.createUser({ name, email });
    res.status(201).json(newUser);
  }

  async getUsers(req, res) {
    const users = await this.usersService.getUsers();
    res.status(200).json(users);
  }

  async getUser(req, res) {
    const { id } = req.params;
    const user = await this.usersService.getUserById(id);
    res.status(200).json(user);
  }
}

module.exports = UsersController;
