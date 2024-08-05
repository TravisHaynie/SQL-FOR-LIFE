INSERT INTO department (name) VALUES ('Engineering'), ('Finance'), ('Marketing');

INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 80000, 1), ('Accountant', 60000, 2), ('Marketing Specialist', 70000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, NULL), ('Jane', 'Smith', 2, 1), ('Michael', 'Johnson', 3, 1);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
