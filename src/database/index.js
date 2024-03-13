const { Pool } = require('pg');

const conn = new Pool({
  user: 'postgres',
  password: '123456',
  host: 'localhost',
  database: 'nodepg',
  port: '5492'
})

module.exports = conn;