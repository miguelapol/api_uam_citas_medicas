CREATE DATABASE IF NOT exists citas;
USE citas;
CREATE TABLE clientes (
		id INT(11) NOT NULL AUTO_INCREMENT,
        nombre VARCHAR(45) DEFAULT NULL,
        email VARCHAR(45) DEFAULT NULL,
        telefono VARCHAR(45) DEFAULT NULL,
        fecha DATE DEFAULT NULL,
        sintomas VARCHAR(200) DEFAULT NULL,
        PRIMARY KEY(id)
);
DESCRIBE clientes;
INSERT INTO clientes values
	(1,'miguel','apol@gmail.com','55986628','20/02/25','estaaa mal'),
	(2,'diego','apol@gmail.com','526628','25/02/25','estaaa mal'),
	(3,'Leond','apol@gmail.com','55986628','20/02/25','estaaa mal');
    
    SELECT * FROM clientes;