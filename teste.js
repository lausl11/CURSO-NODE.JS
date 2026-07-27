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