-- id # is implied so not needed
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
       ("Talent Acquisition Assistant Manager", 50000, 3),
       ("Junior Talent Acquisition Specialist", 40000, 3),
       ("Customer Service Representative", 44000, 4);
       ("Customer Service Team Lead", 50000, 4);

INSERT INTO `employee` (first_name, last_name, role_id, manager_id)
VALUES ("Olivia", "Morales", 2),
       ("TJ", "Spencer", 4),
       ("Harrison", "Wu", 6),
       ("Sunny", "Patel", 8),
       ("Marie", "Perkins" 10),
       ("Fez", "Rossi", 12 ),
       ("Sienna", "Takada", 14),
       ("Hugo", "Lopez", 16);