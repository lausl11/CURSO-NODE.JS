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
 
 INSERT INTO avisos(titulo, descrisao, data)
 VALUES
    ("tirar lixo", "tirar lixo da cozinha,quartos e banheiros","2026-7-23"),
    ("jojo", "jojo vai lancar na netflix","2026-9-25"),
    ("filme de avatar", "o filme de avatar vai lancar, se quiser ver vai tenque assinar a paramont","2026-7-25");

CREATE TABLE promoçoes(
    item VARCHAR(50),
    preco_inicial DECIMAL,
    preco_promocional DECIMAL
);