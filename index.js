const express = require("express");
const app = express();
const bodyparser = require("body-parser")
const { engine } = require('express-handlebars');
const Post = require('./models/Post')

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
    app.post('/add', function(req, res){

        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.send('forms criado com sucesso')
        }).catch(function(erro){
            res.send('houve um erro: '+erro)
        })  
    })
    // Verifica se os dados do corpo existem antes de tentar aceder
    
   

    app.get('/professores', function(req, res){
        res.render('professores')
    })

app.listen(3000, function(){
    console.log("servidor rodando na url localhost:3000");
});