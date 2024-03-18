CREATE TABLE frutas(
	nome VARCHAR(30)
);

CREATE TABLE produtos(
	nome VARCHAR(30),
	tipo VARCHAR(30),
	sabor VARCHAR (30)
);

INSERT INTO frutas (nome) VALUES ('laranja');
INSERT INTO frutas (nome) VALUES ('morango');
INSERT INTO frutas (nome) VALUES ('maçã');
INSERT INTO frutas (nome) VALUES ('banana');
INSERT INTO frutas (nome) VALUES ('melancia');
INSERT INTO frutas (nome) VALUES ('goiaba');
INSERT INTO frutas (nome) VALUES ('manga');
INSERT INTO frutas (nome) VALUES ('pitaya');
INSERT INTO frutas (nome) VALUES ('pitanga');

SELECT * FROM frutas;

INSERT INTO produtos (nome, tipo, sabor) VALUES ('suco', 'bebida','pitanga');
INSERT INTO produtos (nome, tipo, sabor) VALUES ('chiclete', 'doce','morango');
INSERT INTO produtos (nome, tipo, sabor) VALUES ('biscoito', 'mercearia','goiaba');
INSERT INTO produtos (nome, tipo, sabor) VALUES ('bolo', 'confeitaria','laranja');
INSERT INTO produtos (nome, tipo, sabor) VALUES ('suco', 'bebida','maçã');
INSERT INTO produtos (nome, tipo, sabor) VALUES ('refrigerante', 'bebida','morango');
INSERT INTO produtos (nome, tipo, sabor) VALUES ('suco', 'bebida','melancia');
INSERT INTO produtos (nome, tipo, sabor) VALUES ('brigadeiro', 'doce','chocolate');
INSERT INTO produtos (nome, tipo, sabor) VALUES ('suco', 'bebida','caju');
INSERT INTO produtos (nome, tipo, sabor) VALUES ('água saborizada', 'bebida','limão');
INSERT INTO produtos (nome, tipo, sabor) VALUES ('suco', 'bebida','manga');

SELECT * FROM produtos;


SELECT a.nome , b.sabor FROM frutas AS a INNER JOIN produtos as b ON a.nome = b.sabor;


CREATE TABLE users (
	userid SERIAL PRIMARY KEY,
	username VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	addressId SERIAl ,
	FOREIGN KEY (addressId) REFERENCES address(addressId)
);

CREATE TABLE address(
	addressId  SERIAL PRIMARY KEY,
	state VARCHAR(50) NOT NULL,
	city VARCHAR(50) NOT NULL,
	road VARCHAR(50) NOT NULL
);

drop table address;

INSERT INTO users (username,email,addressId) VALUES('henry','franzhenry46@gmail.com',1);
INSERT INTO address (state ,city ,road) VALUES('sp','são paulo','papoula');

SELECT * FROM address;
SELECT * FROM users;


SELECT a.userId, a.username, b.state, b.city, b.road FROM users AS a INNER JOIN address as b on a.addressId = b.addressId;

SELECT a.userId,a.username ,b.state,b.city,b.road from users as a  RIGHT JOIN address as b on a.addressId = b.addressId;

SELECT a.userId , a.username, b.road FROM users as a  LEFT JOIN address as b on a.addressId = b.addressId ;
