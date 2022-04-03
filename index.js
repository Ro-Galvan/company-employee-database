// importing inquirer package
const inquirer = require('inquirer');

const cTable = require('console.table');
const db = require('./connection');

// const EventEmitter = require('eventemitter3');
// const emitter = new EventEmitter();
// emitter.setMaxListeners(50);

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


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
    if (mainMenu=== 'exit') {
        db.end();
    }
});
};

menuQuestions();

// #1 -view all departments 
const viewAllDepartments = () => { 
     db.query('SELECT * FROM department', (err, results) => {
        err ? console.error(err) : 
       console.table(results);
       menuQuestions();
    });
}

 // TODO #2 view all roles
 const viewAllRoles = () => { 
    db.query(`SELECT role.id, role.title, role.salary, department.name
    FROM role 
    JOIN department 
    ON department.id=role.department_id`, 
    (err, results) => {
        err ? console.error(err) : 
        // console.log
        // ('viewAllRoles successful!'); 
        console.table(results);
        menuQuestions();
    })};


// #3 view all employees
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
            console.table(results);
            menuQuestions(); 
        })};

//  #4 -add a department
 const addDepartment = () => { 
    inquirer.prompt([
    {
        name: 'newdepartment', 
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
        }
        )})
    };

// #5 add a role
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
            message: 'Which department id does the role belong to?',
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

// #6 -add an employee
const addEmployee = () => { 
    inquirer.prompt([
        {
            name: 'addNewFirstName',
            message: `What is the employee's first name?`,
        },
        {
            name: 'addNewLastName',
            message: `What is the employee's last name?`,
        },
        {
            name: 'addNewRole2',
            message: `What is the employee's role?`,
        },
        {
            name: 'addNewManager',
            message: `Who is the employee's manager?`,
        },
    ]).then((answers) => {
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
        [answers.addNewFirstName,
        answers.addNewLastName,
        answers.addNewRole2,
        answers.addNewManager],
        (err, results) => {
            err ? console.error(err) : console.log
            ('New employee has been added'); 
            viewAllEmployees();
        } 
        )})
    };

// #7 update an employee role
const updateEmployeeRole = () => { 
    inquirer.prompt([
        {
            type: 'list',
            name: 'selectEmployee',
            message: `Select the employee you want to update the role for?`,
            choices: [
                {name: 'Olivia Morales', value: 'oliviaMorales'},  //need to grab value
                {name: 'TJ Spencer', value: 'tjSpencer'},
                {name: 'Harrison Wu', value: 'harrisonWu'},
                {name: 'Sunny Patel', value: 'sunnyPatel'},
                {name: 'Marie Perkins', value: 'mariePerkins'},
                {name: 'Fez Rossi', value: 'fezRossi'},
                {name: 'Sienna Takada', value: 'siennaTakada'},
                {name: 'Hugo Lopez', value: 'hugoLopez'},
            ]
        },
        {
            type: 'list',
            name: 'selectRole',
            message: `Which role do you want to assign the selected employee to?`,
            choices: [
                {name: 'Front-end Developer', value: 'frontendDeveloper'},
                {name: 'Back-end Developer', value: 'backendDeveloper'},
                {name: 'Accounts Payable Rep', value: 'accountsPayableRep'},
                {name: 'Accounts Receivable Rep', value: 'accountsReceivableRep'},
                {name: 'Talent Acquisition Manager', value: 'talentAcquisitionManager'},
                {name: 'Talent Acquisition Specialist', value: 'talentAcquisitionSpecialist'},
                {name: 'Customer Service Rep', value: 'customerServiceRep'},
                {name: 'Customer Service Team Lead', value: 'customerServiceTeamLead'},
            ]
        },
    ]).then((answers) => {
        menuQuestions();
        console.log(answers, 'updated successfully');
    //     db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
    //     [answers.addNewFirstName,
    //     answers.addNewLastName,
    //     answers.addNewRole2,
    //     answers.addNewManager],
    //     (err, results) => {
    //         err ? console.error(err) : console.log
    //         ('employee has been updated'); 
    //         viewAllEmployees();
        // } 
        // )})
    })
    // ])
};

// finalQuestions = () => {
//     menuQuestions();
// };