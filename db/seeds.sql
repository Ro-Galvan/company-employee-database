INSERT INTO `department` (name)
VALUES ("Web Development"),
("Accounting"),
("Human Resources"),
("Customer Service");

INSERT INTO `role` (title, salary, department_id)
VALUES ("Front-end Developer", 85000, 1),
       ("Back-end Developer", 100000, 1),
       ("Accounts Payable Rep", 41000,2),
       ("Accounts Receivable Rep", 42000, 2),
       ("Talent Acquisition Manager", 50000, 3),
       ("Talent Acquisition Specialist", 40000, 3),
       ("Customer Service Rep", 44000, 4),
       ("Customer Service Team Lead", 50000, 4);

INSERT INTO `employee` (first_name, last_name, role_id, manager_id)
VALUES ("Olivia", "Morales", 1, NULL),
       ("TJ", "Spencer", 2, NULL),
       ("Harrison", "Wu", 3, NULL),
       ("Sunny", "Patel", 4, NULL),
       ("Marie", "Perkins", 5, NULL),
       ("Fez", "Rossi", 6, 5),
       ("Sienna", "Takada", 7, NULL),
       ("Hugo", "Lopez", 8, NULL);