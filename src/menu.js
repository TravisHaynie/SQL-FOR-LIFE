const { getAllDepartments, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./queries');
const { addDepartmentPrompt, addRolePrompt, addEmployeePrompt, updateEmployeeRolePrompt } = require('./prompts');

const startApp = async () => {
  try {
    // Display all departments
    const departments = await getAllDepartments();
    console.log('All Departments:');
    console.table(departments);

    // Prompt to add a department
    const departmentData = await addDepartmentPrompt();
    await addDepartment(departmentData.name);
    console.log('New Department Added');

    // Prompt to add a role
    const roleData = await addRolePrompt();
    await addRole(roleData.title, roleData.salary, parseInt(roleData.department_id));
    console.log('New Role Added');

    // Prompt to add an employee
    const employeeData = await addEmployeePrompt();
    await addEmployee(employeeData.first_name, employeeData.last_name, parseInt(employeeData.role_id), employeeData.manager_id ? parseInt(employeeData.manager_id) : null);
    console.log('New Employee Added');

    // Prompt to update employee role
    const updateEmployeeRoleData = await updateEmployeeRolePrompt();
    await updateEmployeeRole(parseInt(updateEmployeeRoleData.employee_id), parseInt(updateEmployeeRoleData.role_id));
    console.log('Employee Role Updated');

  } catch (error) {
    console.error('Error in application:', error);
  }
};

module.exports = {
  startApp,
};
