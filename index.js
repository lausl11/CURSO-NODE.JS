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
    app.get('/', function(req, res){
        Post.findAll({ raw: true }).then(function(posts){
    console.log(posts)
    res.render('home', { posts: posts })
})
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

   app.get('/deletar/:id', function(req, res){
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(){
        res.send('deletado com sucesso')
    }).catch(function(erro){
        res.send('falhou')
    })
})

    
   

    app.get('/professores', function(req, res){
        res.render('professores')
    })

app.listen(3000, function(){
    console.log("servidor rodando na url localhost:3000");
});