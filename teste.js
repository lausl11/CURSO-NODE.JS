const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', 'Lau17112010*', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso!")
}).catch(function(erro){
    console.log("falha ao conectar: "+erro)
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
    titulo: "qualquer",
    conteudo: "isso ai"
})

const usuarios = sequelize.define ('usuarios', {
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
    nome: "laura",
    sobrenome: "laurindo",
    idade: 15,
    email: "laura.gmail.com"
})
