const db = require('./db');


class UsersService {
  async createUser(userData) {
    const { name, email } = userData;
    const { rows } = await db.query(
      'INSERT INTO users (user_name, user_email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    return rows[0];
  }

  async editingUser(userData) {

    try {
    const { id, name, email } = userData;
    const { rows } = await db.query(`UPDATE users
                                    SET user_name='${name}', user_email='${email}'
                                    where user_id='${id}'`);
    return rows[0];
  }catch (error) {
    console.error('Ошибка при редактировании пользователя:', error);
  }
  }

  async getUsers() {
    const { rows } = await db.query('SELECT * FROM users');
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
