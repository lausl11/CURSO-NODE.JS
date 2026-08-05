const express = require("express");
const app = express();
const bodyparser = require("body-parser")
const { engine } = require('express-handlebars');

// config
    // templade engine
   app.engine('handlebars', engine({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars')

    // conexão ao BD com sequelize
    const Sequelize = require('sequelize');
const bodyParser = require("body-parser");
    const sequelize = new Sequelize('sistemadecadastro', 'root', 'Lau17112010*', {
        host: "localhost",
        dialect: 'mysql'
    })

    //body parser

    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    
    // rotas
    app.get('/avisos', function (req, res){
        res.render('avisos')
    });
    
    app.post('/tarefa',  function (req, res){
        res.send('aviso cadastrado com sucesso')
    })

    app.get('/formulario', function (req, res){
        res.render('formulario')
    })
app.post('/add', function(req, res) {
    // Verifica se os dados do corpo existem antes de tentar aceder
    if (!req.body || !req.body.titulo) {
        return res.send('Nenhum dado foi enviado pelo formulário.');
    }

    res.render('sucesso', {
        layout: false,
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    });
});

    app.get('/professores', function(req, res){
        res.render('professores')
    })

app.listen(3000, function(){
    console.log("servidor rodando na url localhost:3000");
});