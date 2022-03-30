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
 db.query('SELECT * FROM employees', function (err, results) {  //same as doing it in workbench
   console.log('stuff from db', results); //results can be named whatever we want but usually called results
 });
 db.query('SELECT * FROM employees', function (err, results) {  //same as doing it in workbench
   console.log('stuff from db', results); //results can be named whatever we want but usually called results
 });
 db.query('SELECT * FROM employees', function (err, results) {  //same as doing it in workbench
   console.log('stuff from db', results); //results can be named whatever we want but usually called results
 });
 db.query('SELECT * FROM employees', function (err, results) {  //same as doing it in workbench
   console.log('stuff from db', results); //results can be named whatever we want but usually called results
 });
 db.query('SELECT * FROM employees', function (err, results) {  //same as doing it in workbench
   console.log('stuff from db', results); //results can be named whatever we want but usually called results
 });

 module.exports = db;







