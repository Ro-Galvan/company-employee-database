 // Import and require mysql2
 const mysql = require('mysql2'); //have backend app connect to sql by installing module doing npm install

 // Connect to database
 const db = mysql.createConnection(
   {
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'employees_db'
   },
   console.log(`Connected to the employees_db database.`)
 );
 
//  // Query database
// put each query into its own function 

// TODO #1
// WHEN I choose to view all departments ?
// THEN I am presented with DEPARTMENT table showing department names and department ids
//  db.query('SELECT * FROM employees', function (err, results) {  //same as doing it in workbench
//    console.log('stuff from db', results); //results can be named whatever we want but usually called results
//  });


// TODO #2
// WHEN I choose to view all roles
// THEN I am presented with a JOINED TABLE from all 3 tables-- the job title (role), role id (?), the department that role belongs to (department), and the salary (role) for that role

// TODO #3
// WHEN I choose to view all employees
// THEN I am presented with a JOINED table from all 3 tables--showing employee data, including employee ids (employee), first names(employee), last names(employee), job titles (role), departments(department), salaries (role), and managers(employee) that the employees report to

// TODO #8:  the video shows the added employee when view all employees is selected--9 employees now
 
module.exports = db;







