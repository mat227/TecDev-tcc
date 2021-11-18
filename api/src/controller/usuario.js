import db from "../db.js";

import Sequelize from 'sequelize';
const { Op, col, fn } = Sequelize;


import express from "express";
const app = express.Router();

// pagamento
app.post('/addpagamento', async (req, resp) => {
    try {
        let usuParam = req.body;

        let u = await db.infoc_tdv_forma_pagamento.findOne({ where: {  nr_cartao: usuParam.nrcartao, nm_titular_cartao: usuParam.titular ,nm_sobrenome_cartao:usuParam.sobrenome , dt_vencimento:usuParam.vencimento, ds_cvv: usuParam.cvv} });
        if( u == "") {
            return resp.send({erro: 'Todos os campo são obrigatórios'})
        }
        if( usuParam.nrcartao == "") {
            return resp.send({erro: 'O campo Número do cartão é obrigatório'})
        }
        if( usuParam.titular == "") {
            return resp.send({erro: 'O campo Titular é obrigatório'})
        }
        if( usuParam.sobrenome == "") {
            return resp.send({erro: 'O campo Sobrenome é obrigatório'})
        }
        if( usuParam.vencimento == "") {
            return resp.send({erro: 'O campo Vencimento é obrigatório'})
        }
    //    if( usuParam.parcela == "") {
      //      return resp.send({erro: 'O campo Parcela é obrigatório'})
      //  }
        if( usuParam.cvv == "") {
            return resp.send({erro: 'O campo CVV é obrigatório'})
        }
        let r = await db.infoc_tdv_forma_pagamento.create({
            nr_cartao:usuParam.nrcartao,
            nm_titular_cartao: usuParam.titular,
            nm_sobrenome_cartao: usuParam.sobrenome,
            dt_vencimento:usuParam.vencimento,
         //   nr_parcelas:usuParam.parcelas,
            ds_cvv:usuParam.cvv
          
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!' })
    }
})


app.get('/pagamento', async (req, resp) => {
    try {
        let pagamento = await db.infoc_tdv_forma_pagamento.findAll();
        resp.send(pagamento);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!' })
    }
})


app.get('/suaInfo/:id', async (req, resp)=>{
    try{
        let id= req.params.id
        const cont = await db.infoc_tdv_cliente.findAll({where : {id_cliente :id}, include: {model: db.infoc_tdv_endereco, as :'infoc_tdv_enderecos'}});
        resp.send(cont);
    }catch(e){
        resp.send({erro: e.toString()});
    }

});

app.post('/addEndereco', async (req, resp) =>{
     let info = req.body;
    try{
        let r = await db.infoc_tdv_endereco.create({id_cliente : info.id, nm_rua : info.rua, ds_cep:info.cep, ds_numero : info.numero});
        resp.send(r);
    }
    catch(e){
        resp.send(e.toString());
    }
})


// alterando o dados do  usuario
app.put('/altdadosA/:id', async (req, resp) =>{
    try{
        let {nome, cpf, dataNasc, email, nomerua, cep, nrcasa, bairro, complemento } = req.body; 
        let idend = await  db.infoc_tdv_endereco.findOne({
            attributes: getFields(),
            where : {id_cliente : req.params.id}},
            );
        let id  = idend.getDataValue('id');
        console.log(id);
       
        let r =  await db.infoc_tdv_cliente.update({where : {id_cliente : req.params.id} },
            {nm_cliente : nome, ds_cpf : cpf, dt_nascimento : dataNasc, ds_email : email });
        let r1 = await db.infoc_tdv_endereco.update({where: {id_endereco :id }},
        { nm_rua : nomerua, ds_cep : cep, ds_numero : nrcasa, ds_bairro: bairro , ds_complemento : complemento});
        resp.send(r);
    }catch(e){
        resp.send({erro : e.toString()});
    }
})
//post do pedido

app.post('/addpedido', async (req, resp) => {
    try{
        let {idc, situacao , idp } = req.body;
        if(idc === null || idc === undefined || idc === "" || idc <= 0)
            return resp.send({erro: "o cliente nao foi localizado, faça um login"})
        if(idp === null || idp === undefined || idp === [])
            return resp.send({erro: "onao da para fazer um pedido sem um livro "});

        let pedido = await db.infoc_tdv_pedido.create({id_cliente : idc, nr_pedido : Math.floor(Math.random() * 1000) , ds_situacao_ped : situacao, dt_pedido : new Date()});
        for(let pi of idp){
            const { qtd ,livro} = pi;
            let checklivro =  await  db.infoc_tdv_livro.findOne({where : {id_livro : livro }});
            if(checklivro === null)
                return response.send({erro: "Um dos livros não consta na nossa base de dados"});
            let pedido_item = await db.infoc_tdv_pedido_item.create({id_pedido : pedido.id_pedido , qtd_itens : qtd , id_livro : livro });
        }
        console.log("foi efetuado");
        resp.send("efetuado");
    }catch(e){
        resp.send({erro : e.toString()});
    }
})
function getFields(){
    return [
        ['id_endereco', 'id']
    ]
}
export default app;