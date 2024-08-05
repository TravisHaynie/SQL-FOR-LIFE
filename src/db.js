const { Pool } = require('pg');

// Configure database connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'employee_tracker',
  password: 'Escondido$2',
});

module.exports = pool;
