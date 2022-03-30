// importing inquirer package
   const inquirer = require('inquirer');
    require('console.table');
   const db = require('./connection');

   const express = require('express');
   const PORT = process.env.PORT || 3001;
   const app = express();
   
   // Express middleware
   app.use(express.urlencoded({ extended: false }));
   app.use(express.json());


   //  // Query database
// put each query into its own function 

// TODO #1
// WHEN I choose to view all departments ?
// THEN I am presented with DEPARTMENT table showing department names and department ids
// WRAP in a function

//have a switch case for if value is --this will; be in inquirer function -then call get all departments function if that is select
 function getAllDepartments () { 
     db.query('SELECT * FROM department', function (err, results) {  
    //    console.log('stuff from db', results); //results can be named whatever we want but usually called results
       console.table(results) 
    });
}
    
    // TODO #2
    // WHEN I choose to view all roles
    // THEN I am presented with a JOINED TABLE from 2 tables-- the job title (role), role id (?), the department that role belongs to (department), and the salary (role) for that role
    db.query(`SELECT role.id, role.title, role.salary, department.name
    FROM role 
    JOIN department 
    ON department.id=role.department_id`, 
    function (err, results) {  
        res.json(results) 
    });
    
    // TODO #3
    // WHEN I choose to view all employees
    // THEN I am presented with a JOINED table from all 3 tables--showing employee data, including employee ids (employee), first names(employee), last names(employee), job titles (role), departments(department), salaries (role), and managers(employee) that the employees report to
    db.query('SELECT * FROM department', function (err, results) {  
        res.json(results) 
    });
    // TODO #8:  the video shows the added employee when view all employees is selected--9 employees now
     
   

//    group some questions based on type of questions asked
// create function and inside function put the array of questions

   const initialQuestions = [
    {
        type: 'list',
        name: 'initialQ',
        message: 'What would you like to do?',
        choices: [
            {
                name: "View all departments",
                value: "VIEW_DEPARTMENTS"
            },
            'view all roles', 'view all employees', 
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
const addRoleQuestions = [
            {
                name: 'addRole',
                message: 'What is the name of the role?',
            },
           ];    


// TODO #6
// WHEN I choose to add an employee
    // TODO A ASK QUESTIONS: 1.What is the employee’s first name?, 2.What is the employee’s last name?, 3.What is the employee’s role?, 4.What is the employee’s manager? 
    // and that employee is added to the database

// TODO #7
// WHEN I choose to update an employee role
// THEN I am prompted (ASK ?: Which employee's role do you want to update (show list of all employees)? 2. Which role do you want to assign the selected employee (show list of all roles)? 
//  and this information is updated in the database ((updated employee's role)


//    const TESTviewDepartmentQuestions = [
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
            // ...addRoleQuestions,
        ]
    ).then((answers) => {
        console.log(answers);
    }).catch((error) => {
            if (error) {
                console.log('Something else went wrong', error);
            } else {
                console.log('success');
            }
          });
};



// Function call to initialize app
init();