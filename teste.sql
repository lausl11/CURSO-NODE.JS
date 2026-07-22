CREATE TABLE usuarios (
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

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