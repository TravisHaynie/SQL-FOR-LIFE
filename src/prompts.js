const inquirer = require('inquirer');

// Add Department Prompt
const addDepartmentPrompt = () => {
  return inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Enter the name of the department:'
  });
};

// Add Role Prompt
const addRolePrompt = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of the role:'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary for this role:'
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'Enter the department ID for this role:'
    }
  ]);
};

// Add Employee Prompt
const addEmployeePrompt = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: "Enter the employee's first name:"
    },
    {
      type: 'input',
      name: 'last_name',
      message: "Enter the employee's last name:"
    },
    {
      type: 'input',
      name: 'role_id',
      message: "Enter the role ID for this employee:"
    },
    {
      type: 'input',
      name: 'manager_id',
      message: "Enter the manager ID for this employee (leave empty if none):"
    }
  ]);
};

// Update Employee Role Prompt
const updateEmployeeRolePrompt = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'employee_id',
      message: 'Enter the ID of the employee to update:'
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Enter the new role ID for the employee:'
    }
  ]);
};

module.exports = {
  addDepartmentPrompt,
  addRolePrompt,
  addEmployeePrompt,
  updateEmployeeRolePrompt
};
