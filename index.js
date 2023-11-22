//CONFIGURAÇÃO INICIAL
//importa a pasta /node_modules/express para o projeto
const express = require('express')
//inicializa o express
const app = express() 

//ler JSON - usando o express - middlewares 
app.use( express.urlencoded({
    extended: true 
}) )    

app.use(express.json())
//----------------------

//rota inicial / enpoint  "/" é a home, página inicial de qualquer site 
app.get('/', (req, res) => {

    res.json({msg: 'Oi express!'})

})

//entregar uma porta para retorno no caso porta 3000 / conforme conf no package.json 
app.listen(3000)