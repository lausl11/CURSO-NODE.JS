CREATE TABLE usuarios (
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) 
VALUES
    ("joao cardoso", "jocao@0email.com", 90),
    ("gustavo", "gogo@0email.com", 63),
    ("yamal", "yamal@0email.com", 29);
  
  

CREATE TABLE avisos(
    titulo VARCHAR(20),
    descrisao VARCHAR(100),
    data DATE
);

CREATE TABLE promoçoes(
    item VARCHAR(50),
    preco_inicial DECIMAL,
    preco_promocional DECIMAL
);