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


SELECT * FROM products;
SELECT * FROM sellers;
SELECT * FROM sales;

INSERT INTO sales(seller,client,product,quantity_sold) VALUES (1,1,2,5);


//PROCEDURE
CREATE OR REPLACE FUNCTION up_storage() RETURNS TRIGGER
AS 

$$
DECLARE
	quant_storage INTEGER;

BEGIN
	SELECT quantity_available from products where id_product = NEW.product into quant_storage;
	IF quant_storage < NEW.quantity_sold THEN
		raise exception 'Quantidade não disponível no estoque';
	else 
		update products set quantity_available = quantity_available - NEW.quantity_sold
			where id_product = NEW.product;
	END IF;
	RETURN NEW;
END
$$ LANGUAGE plpgsql;

//TRIGGER
CREATE TRIGGER trig_up_storage
BEFORE INSERT ON sales
FOR EACH ROW
EXECUTE PROCEDURE up_storage();

//SEQUENCES
CREATE SEQUENCE IF NOT EXISTS code_gen_seq
	INCREMENT 1
	MINVALUE 1
	MAXVALUE 9999999999
	START 10000
	CACHE 1;
	
ALTER TABLE products ADD COLUMN code INTEGER;

ALTER TABLE products ALTER code SET DEFAULT NEXTVAL('code_gen_seq');

INSERT INTO products (prod_name, category, description, quantity_available, price) 
VALUES ('monitor', 'eletrônicos', 'monitor 25 polegadas da marca x', 300, 1200)

