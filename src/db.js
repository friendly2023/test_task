const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ИМЯ БАЗЫ ДАННЫХ',
    password: 'ПАРОЛЬ',
    port: 5432
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
