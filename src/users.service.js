const db = require('./db');


class UsersService {
  async createUser(userData) {
    const { name, email } = userData;
    const { rows } = await db.query(
      'INSERT INTO users (user_name, user_email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
  }

  async check(userData) {
    const { id, name, email } = userData;
    const result = await db.query(
      `SELECT * FROM users WHERE user_id ='${id}';`);
return result.rows.length
  }

  async editingUser(userData) {
      const { id, name, email } = userData;

      const { rows } = await db.query(`UPDATE users
                                      SET user_name='${name}', user_email='${email}'
                                      where user_id='${id}';`);
  }

  async getUsers() {
    const { rows } = await db.query('SELECT * FROM users;');
    return rows;
  }
}

module.exports = UsersService;


// const newUserData = {
//   name: 'John Doe',
//   email: 'doe@ex75ple.com'
// }

// let ert = new UsersService()
// ert.getUserById(10)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.error('Error:', err.message);
//     });
