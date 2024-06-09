const UserActionsService = require('./user-actions.service');

class UserActionsController {
  constructor() {
    this.userActionsService = new UserActionsService();
  }

  async createUserAction(id, action) {
    try {
      const actions = await this.userActionsService.createUserAction(id, action);
    } catch (error) {
      console.error('Ошибка при отслеживании пользовательского действия:', error);
    }
  }

  async getUserActions(req, res) {
    try {
      const userActions = await this.userActionsService.getUserActions();
      res.render('user-actions', { userActions });
    } catch (error) {
      console.error('Ошибка при получении активности пользователя:', error);
      res.status(500).json('Ошибка при получении активности пользователя');
    }
  }
}

module.exports = UserActionsController;
