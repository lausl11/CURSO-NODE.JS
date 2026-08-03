
    const Sequelize = require('sequelize')
    const sequelize = new Sequelize('sistemadecadastro', 'root', 'Lau17112010*', {
        host: "localhost",
        dialect: 'mysql'
    })

const postagens = sequelize.define('postagens', {
    titulo : {
        type: Sequelize.STRING
    },
    conteudo : {
        type: Sequelize.TEXT
    }
})

postagens.create({
    titulo: "victor",
    conteudo: "da de costa"
})

const usuarios = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

usuarios.create({
    nome: "pedor",
    sobrenome: "daga",
    idade: 99,
    email: "pedor.gmail.com"
})
