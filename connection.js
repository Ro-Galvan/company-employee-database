// Import and require mysql2
 const mysql = require('mysql2'); //have backend app connect to sql by installing module doing npm install


 // Connect to database
 const db = mysql.createConnection(
   {
     host: 'localhost',
     user: 'root',
     database: 'employees_db'
   },
   console.log(`Connected to the employees_db database.`)
 );
 
module.exports = db;







