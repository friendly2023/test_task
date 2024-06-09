const db = require('./db');

class UserActionsService {
  async createUserAction(id, action) {
    await db.query(
      'INSERT INTO user_actions (user_id, action, timestamp) VALUES ($1, $2, NOW())',
      [id, action]
    );
  }

  async getUserActions() {
    const { rows } = await db.query('SELECT * FROM user_actions ORDER BY timestamp;');
    return rows;
  }
}

module.exports = UserActionsService;
