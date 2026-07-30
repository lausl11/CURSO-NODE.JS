const express = require("express");
const app = express();
const { engine } = require('express-handlebars');

// config
    // templade engine
   app.engine('handlebars', engine({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars')

app.listen(3000, function(){
    console.log("servidor rodando na url localhost:3000");
});