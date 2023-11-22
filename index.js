//importa a pasta /node_modules/express para o projeto
const express = require('express')
//inicializa o express
const app = express() 

const mongoose = require('mongoose')
//LER JSON - usando o express - middlewares 
app.use( express.urlencoded({
    extended: true 
}))    

app.use(express.json())
//----------------------
//ROTA - INICIO---------
const personroutes = require('./routes/personroutes')
app.use('/pessoa', personroutes)
//----------------------
const db_user = 'cafej'
const db_Password = encodeURIComponent('q3Sa56aPeMLFfFYI')

mongoose.connect(`mongodb+srv://${db_user}:${db_Password}@apicluster.odurxhr.mongodb.net/bancodaapi?retryWrites=true&w=majority`)

.then(()=> {
    console.log('Conectado com sucesso')
    //entregar uma porta para retorno no caso porta 3000 / conforme conf no package.json 
    app.listen(3000)
})   
.catch((err) => console.log(err))