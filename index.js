const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("seja bem vindo ao meu app");
});

app.get("/sobre", function(req, res){
    res.send("uga uga pra vc"); 
});


app.get("/blog", function(req, res){
    res.send("meu blog");
});

app.get('/ola/:nome/:profissao', function(req, res){
    res.send('Olá ' + req.params.nome + ', sua profissão é: ' + req.params.profissao)
});

app.get("/planta/:tipo/:cor", function(req, res){
    res.send('sua planta favorita, '+ 'ela e do tipo '+req.params.tipo+', e a cor e: '+req.params.cor)
});

app.listen(3000, function(){
    console.log("servidor rodando na url localhost:3000");
});