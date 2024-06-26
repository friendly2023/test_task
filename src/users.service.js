const db = require('./db');


class UsersService {
  async createUser(userData) {
    const { name, email } = userData;
    const { rows } = await db.query(
      'INSERT INTO users (user_name, user_email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    return rows[0].user_id;
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
    const { rows } = await db.query('SELECT * FROM users ORDER BY user_id;');
    return rows;
  }
}

module.exports = UsersService;


// const newUserData = {
//   name: 'John Doe',
//   email: 'doe@ex8875ple.com'
// }

// let ert = new UsersService()
// ert.createUser(newUserData)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.error('Error:', err.message);
//     });
