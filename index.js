// importing inquirer package
   const inquirer = require('inquirer');

   const db = require('./connection');


//    groups some questions
// create function and inside function put the array of questions

   const initialQuestions = [
    {
        type: 'list',
        name: 'addmember2',
        message: 'What would you like to do?',
        choices: ['add an engineer', 'add an intern', 'finished']
    },
   ];

   // function to initialize app
function init() {
    inquirer.prompt(
        [
            // ...managerQuestions,
        ]
    )};

// Function call to initialize app
init();