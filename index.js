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

app.listen(3000, function(){
    console.log("servidor rodando na url localhost:3000");
});