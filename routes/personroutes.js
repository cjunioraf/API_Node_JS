const router = require('express').Router();

const Pessoa = require('../models/Pessoa')
//rota inicial / enpoint  "/" é a home, página inicial de qualquer site 
//BUSCA DE DADOS 
router.get('/', async (req, res) => {

    try{        
        //await - espera todos os dados do db para retornar
        const pessoas = await Pessoa.find()
        res.status(200).json(pessoas)
    }
    catch(erro){
        res.status(500).json({error: error})
    }
    
})
//BUSCAR DE DADOS UM REGISTRO POR ID 
router.get('/:id', async (req, res) => {

    //console.log(req)
    //vou passar o ID na url.
    const $id = req.params.id

    try{        
        //await - espera todos os dados do db para retornar
        //_id pq é o padrão do db MongoDB - Atlas
        const pessoas = await Pessoa.findOne({_id: $id})
        
        if(pessoas != null)
            res.status(200).json(pessoas)
        else{
            res.status(424).json({error:'Pessoa não localizada!'})
        }                

    }
    catch(erro){
        res.status(500).json({error: error})
    }

})

//CRIAÇÃO DE DADOS 
router.post('/', async (req, res) =>{
    //req.body
    const {nome, salario, aprovado, idade} = req.body

    if(!idade){
        res.status(422).json({error:'Idade é obrigatório.'})
        return
    }

    if(!salario){
        res.status(422).json({error:'Salário é obrigatório.'})
        return
    }

    if(!nome){
        res.status(422).json({error:'Nome é obrigatório.'})
        return
    }

    const pessoa = {nome, salario, aprovado, idade}
    
    try{
        //criar o registro 
        await Pessoa.create(pessoa) 
        //status HTTP - status de sucesso na requisição POST
        res.status(201).json({msg: 'Inserido com sucesso!'})

    }
    catch(erro){
        res.status(500).json({error: error})
    }
})

//UPDATE NO REGISTRO (PUT E PATCH) - PUT É O OBJETO COMPLETO - PATCH É DADOS PARCIAIS PARA SEREM ATUALIZADOS.


module.exports = router