const pool = require('./db');

// Fetch all departments
const getAllDepartments = async () => {
  try {
    const queryText = 'SELECT * FROM department';
    const res = await pool.query(queryText);
    return res.rows;
  } catch (error) {
    console.error('Error executing query', error);
    throw error;
  }
};

// Add a new department
const addDepartment = async (name) => {
  try {
    const queryText = 'INSERT INTO department (name) VALUES ($1) RETURNING *';
    const res = await pool.query(queryText, [name]);
    return res.rows[0];
  } catch (error) {
    console.error('Error adding department:', error);
    throw error;
  }
};

// Add a new role
const addRole = async (title, salary, department_id) => {
  try {
    const queryText = 'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *';
    const res = await pool.query(queryText, [title, parseFloat(salary.replace(/,/g, '')), department_id]);
    return res.rows[0];
  } catch (error) {
    console.error('Error adding role:', error);
    throw error;
  }
};

// Add a new employee
const addEmployee = async (first_name, last_name, role_id, manager_id) => {
  try {
    const queryText = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *';
    const res = await pool.query(queryText, [first_name, last_name, role_id, manager_id || null]);
    return res.rows[0];
  } catch (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
};

// Update an employee's role
const updateEmployeeRole = async (employee_id, role_id) => {
  try {
    const queryText = 'UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *';
    const res = await pool.query(queryText, [role_id, employee_id]);
    return res.rows[0];
  } catch (error) {
    console.error('Error updating employee role:', error);
    throw error;
  }
};

module.exports = {
  getAllDepartments,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
