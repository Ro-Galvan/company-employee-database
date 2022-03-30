// importing inquirer package
   const inquirer = require('inquirer');

   const db = require('./connection');

//    const express = require('express');
//    const PORT = process.env.PORT || 3001;
//    const app = express();
   
//    // Express middleware
//    app.use(express.urlencoded({ extended: false }));
//    app.use(express.json());
   

//    group some questions based on type of questions asked
// create function and inside function put the array of questions

   const initialQuestions = [
    {
        type: 'list',
        name: 'addmember2',
        message: 'What would you like to do?',
        choices: ['view all departments', 'view all roles', 'view all employees', 
        'add a department', 'add a role', 'add an employee', 'update an employee role']
    },
   ];

   // TODO #4
// WHEN I choose to add a department
    // THEN I am prompted TODO A: ASK QUESTION: What is the name of the department?
        // TODO B and that department is added to the database (doesn't show up now in the displayed table)


// TODO #5
// WHEN I choose to add a role
    // TODO A ASK QUESTIONS: THEN I am prompted to enter the 1.What is the name of the role?, 2.What is their salary? , 3.Which department does the role belong to?
        // TODO B and that role is added to the database


// TODO #6
// WHEN I choose to add an employee
    // TODO A ASK QUESTIONS: 1.What is the employee’s first name?, 2.What is the employee’s last name?, 3.What is the employee’s role?, 4.What is the employee’s manager? 
    // and that employee is added to the database

// TODO #7
// WHEN I choose to update an employee role
// THEN I am prompted (ASK ?: Which employee's role do you want to update (show list of all employees)? 2. Which role do you want to assign the selected employee (show list of all roles)? 
//  and this information is updated in the database ((updated employee's role)


//    const viewDepartmentQuestions = [
//     {
//         type: 'list',
//         name: 'addmember2',
//         message: 'What would you like to do?',
//         choices: ['view all departments', 'view all roles', 'view all employees', 
//         'add a department', 'add a role', 'add an employee', 'update an employee role']
//     },
//    ];

   // function to initialize app
function init() {
    inquirer.prompt(
        [
            ...initialQuestions,
        ]
    )};



// Function call to initialize app
init();