// importing inquirer package
   const inquirer = require('inquirer');

   // Import and require mysql2
const mysql = require('mysql2'); //have backend app connect to sql by installing module doing npm install

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',  ///you will need to put your SQL password in here for it to work
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

// Query database
db.query('SELECT * FROM students', function (err, results) {  //same as doing it in workbench
  console.log('stuff from db', results); //results can be named whatever we want but usually called results
});


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