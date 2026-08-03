const express = require("express");
const app = express();
const { engine } = require('express-handlebars');

// config
    // templade engine
   app.engine('handlebars', engine({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars')

    // conexão ao BD com sequelize
    const Sequelize = require('sequelize')
    const sequelize = new Sequelize('sistemadecadastro', 'root', 'Lau17112010*', {
        host: "localhost",
        dialect: 'mysql'
    })
    
    // rota
    app.get('/avisos', function (req, res){
        res.render('avisos')
    });

    app.get('/formulario', function (req, res){
        res.render('formulario')
    })

app.listen(3000, function(){
    console.log("servidor rodando na url localhost:3000");
});