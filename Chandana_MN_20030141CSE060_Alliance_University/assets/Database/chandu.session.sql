show databases;
create DATABASE techlearnhub;
use techlearnhub;
CREATE TABLE users ( id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL);
list tables;
select * from users;