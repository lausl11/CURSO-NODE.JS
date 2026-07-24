CREATE TABLE usuarios (
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios (nome, email, idade) 
VALUES
    ("roberto carlos", "robertin@gmail.com", 59),
    ("luiza antonia", "luiza@gmail.com", 70),
    ("rodolfo", "rodolfo@gmail.com", 99);
  
DELETE FROM usuarios WHERE nome = "pedro de amaral";  

UPDATE usuarios SET email = "rodolfogolfo@gmail.com" WHERE nome = "rodolfo";

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

INSERT INTO promoçoes (item, preco_inicial, preco_promocional)
VALUES 
    ("garrafa de agua", 4.50, 2.99),
    ("2x legging suplex", 130.90, 99.90),
    ("tv smart", 8060.90, 7500.90);

    UPDATE promoçoes SET preco_inicial = 130.00 WHERE nome = "2x legging suplex";