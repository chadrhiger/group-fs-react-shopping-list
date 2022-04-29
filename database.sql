-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE list (
	id SERIAL PRIMARY KEY,
	name VARCHAR(25) NOT NULL,
	quantity numeric(10, 2) NOT NULL, 
	unit VARCHAR(25) NOT NULL,
  purchased boolean DEFAULT FALSE
	);
	
SELECT * FROM list;

INSERT INTO list (name, quantity, unit)
VALUES ('milk', 1, 'gallon');
