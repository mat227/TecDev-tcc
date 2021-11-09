import db from "../db.js";

import Sequelize from 'sequelize';
const { Op, col, fn } = Sequelize;


import express from "express";
const app = express.Router();



app.get('/suaInfo/:id', async (req, resp)=>{
    try{
        let id= req.params.id
        let cont = await db.infoc_tdv_cliente.findAll({where : {id_cliente :id}, include: {model: db.infoc_tdv_endereco, as :'infoc_tdv_enderecos'}});
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
        let idend = await  db.infoc_tdv_endereco.findOne({
            attributes: getFields(),
            where : {id_cliente : req.params.id}},
            );
        let id  = idend.getDataValue('id');
        console.log(id);
        let {nome, cpf, dataNasc, email, nomerua, cep, nrcasa, bairro, complemento } = req.body; 
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
        
        let pedido = await db.infoc_tdv_pedido.create({id_cliente : idc, ds_situacao_ped : situacao, dt_pedido : new Date()});
        for(let pi of idp){
            const { qtd ,livro} = pi;
            
            let pedido_item = await db.infoc_tdv_pedido_item.create({id_pedido : pedido.id_pedido , qtd_items : qtd , id_livro : livro });
        }
        resp.send("Pedido cadastrado com sucesso");
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