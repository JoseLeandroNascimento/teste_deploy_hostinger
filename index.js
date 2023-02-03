
const express = require('express');

app = express();

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{

    res.json("Seja bem vindo ao VPS rodando Node.js pelo Doker")
})


app.get('/admin',(req,res)=>{

    res.json([
        'Gabriel',
        'Vanessa'
    ]);
})

app.listen(port,()=>{console.log(`Servidor rodando na porta ${port}`)});

