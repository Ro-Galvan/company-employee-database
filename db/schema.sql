DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT PRIMARY KEY, -- AUTO_INCREMENT??
  name VARCHAR(30)
);

CREATE TABLE roleTbl ( --why can't I call it role????????
  id INT PRIMARY KEY, --added a primary key  to it-as general rule have a primary key in every table you build
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT
  FOREIGN KEY (department_id) 
  REFERENCES department(id) --name of table it is refrencing 
  ON DELETE SET NULL -- if refrence instructor is deleted it will be set to null-no value
  -- ON DELETE CASCADE -- if refrence instructor is deleted all the courses that the instructor was teaching will be deleted
);

CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name: VARCHAR(30),
  last_name: VARCHAR(30),
  role_id INT,
  manager_id INT  --null if the employee has no manager???
  FOREIGN KEY (role_id) --line 16
  REFERENCES roleTbl(id) --name of table it is refrencing 
  ON DELETE SET NULL
);