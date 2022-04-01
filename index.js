// importing inquirer package
const inquirer = require('inquirer');
// require('console.table');
const cTable = require('console.table');
const db = require('./connection');

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//    group some questions based on type of questions asked
// create function and inside function put the array of questions

const menuQuestions = () => {
    inquirer.prompt([
        {
        type: 'list',
        name: 'mainMenu',
        message: 'What would you like to do?',
        choices: [
            {name: 'View all Employees', value: 'view_all_employees'},  //need to grab value
            {name: 'Add Employee', value: 'add_employee'},
            {name: 'Update Employee Role', value: 'update_employee_role'},
            {name: 'View All Roles', value: 'view_all_roles'}, 
            {name: 'Add Role', value: 'add_role'},
            {name: 'View All Departments', value: 'view_all_departments'},
            {name: 'Add Department', value: 'add_department'},
            {name: 'Exit', value: 'exit'},
        ]
    }
])
.then((answers) => {
    const {mainMenu} = answers;
    if (mainMenu === 'view_all_employees') {
        viewAllEmployees();
    }
    if (mainMenu === 'add_employee') {
        addEmployee();
    }
    if (mainMenu === 'update_employee_role') {
        updateEmployeeRole();
    }
    if (mainMenu === 'view_all_roles') {
        viewAllRoles();
    }
    if (mainMenu=== 'add_role') {
        addRole();
    }
    if (mainMenu === 'view_all_departments') {
        viewAllDepartments();
    }
    if (mainMenu === 'add_department') {
        addDepartment();
    }
    if (mainMenu=== 'Exit') {
        connection.end();
    }
});
};
// console.log('does this work', menuQuestions);

menuQuestions();
// TODO #1
// view all departments 
const viewAllDepartments = () => { 
     db.query('SELECT * FROM department', (err, results) => {
        err ? console.error(err) : 
        // console.log
        // ('viewAllDepartments successful!'); 
       console.table(results);
       menuQuestions();
    });
}

 // TODO #2
 const viewAllRoles = () => { 
    db.query(`SELECT role.id, role.title, role.salary, department.name
    FROM role 
    JOIN department 
    ON department.id=role.department_id`, 
    (err, results) => {
        err ? console.error(err) : 
        console.log
        ('viewAllRoles successful!'); 
        console.table(results);
        menuQuestions();
    })};


    // TODO #3
    // WHEN I choose to view all employees
    // THEN I am presented with a JOINED table from all 3 tables--showing employee data, including employee ids (employee), first names(employee), last names(employee), job titles (role), departments(department), salaries (role), and managers(employee) that the employees report to
 const viewAllEmployees = () => { 
    db.query(`SELECT employee.id,
        employee.first_name,
        employee.last_name,
        role.title,
        department.name AS 'department',
        role.salary,
        employee.manager_id
      FROM employee
      JOIN role
        ON role.id = employee.role_id
      JOIN department
        ON department.id=role.department_id`,
        (err, results) => {
            err ? console.error(err) : 
            // console.log
            // ('viewAllEmployees successful!'); 
            console.table(results);
            menuQuestions(); 
        })};

   // TODO #4
// WHEN I choose to add a department
    // THEN I am prompted TODO A: ASK QUESTION: What is the name of the department?
        // TODO B and that department is added to the database 

 const addDepartment = () => { 
    inquirer.prompt([
    {
        name: 'newdepartment', //need to grab value
        message: 'What is the name of the department you would like to add?',
    },
    ]).then((answers) => {
        db.query(`INSERT INTO department (name) VALUES (?)`,
        [answers.newdepartment],
        (err, results) => {
            err ? console.error(err) : console.log
            ('Department has been added'); 
            console.table(results);
            viewAllDepartments();
            menuQuestions();
        }
        )})
    };

// TODO #5
// WHEN I choose to add a role
    // TODO A ASK QUESTIONS: THEN I am prompted to enter the 1.What is the name of the role?, 2.What is their salary? , 3.Which department does the role belong to?
        // TODO B and that role is added to the database 

const addRole = () => { 
    inquirer.prompt([
        {
            name: 'addNewRole',
            message: 'What is the name of the role?',
        },
        {
            name: 'addNewSalary',
            message: 'What is their salary?',
        },
        {
            name: 'addNewDepartment',
            message: 'Which department does the role belong to?',
        },
    ]).then((answers) => {
        db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`,
        [answers.addNewRole,
        answers.addNewSalary,
        answers.addNewDepartment],
        (err, results) => {
            err ? console.error(err) : console.log
            ('Role has been added'); 
            viewAllRoles();
        } 
        )})
};

// TODO #6
// WHEN I choose to add an employee
    // TODO A ASK QUESTIONS: 1.What is the employee’s first name?, 2.What is the employee’s last name?, 3.What is the employee’s role?, 4.What is the employee’s manager? 
    // and that employee is added to the database

// const addEmployee = () => { 

//     }

// TODO #7
// WHEN I choose to update an employee role
// THEN I am prompted (ASK ?: Which employee's role do you want to update (show list of all employees)? 2. Which role do you want to assign the selected employee (show list of all roles)? 
//  and this information is updated in the database ((updated employee's role)

// const updateEmployeeRole = () => { 

// }


// TODO #8:  the video shows the added employee when view all employees is selected--9 employees now
// PENDING**= () => { 


// }