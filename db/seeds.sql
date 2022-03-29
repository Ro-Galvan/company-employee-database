INSERT INTO department (id, name)
VALUES ('d001','Marketing'),
('d002','Finance'),
('d003','Human Resources'),
('d004','Production'),
('d005','Development'),
('d006','Quality Management'),
('d007','Sales'),
('d008','Research'),
('d009','Customer Service');

INSERT INTO roleTbl (id, title, salary, department_id)
VALUES ("Intro to JavaScript", 1),
       ("Data Science", 2),
       ("Linear Algebra", 3),
       ("History of the Internet", 4),
       ("Machine Learning", 4),
       ("Game Design", 1 ),
       ("Cloud Development", 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES ("Intro to JavaScript", 1),
       ("Data Science", 2),
       ("Linear Algebra", 3),
       ("History of the Internet", 4),
       ("Machine Learning", 4),
       ("Game Design", 1 ),
       ("Cloud Development", 1);