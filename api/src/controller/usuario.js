import db from "../db.js";

import Sequelize from 'sequelize';
const { Op, col, fn } = Sequelize;


import express from "express";
const app = express.Router();



app.get('/suaInfo', async (req, resp)=>{
    try{
        
        let cont = await db.infoc_tdv_cliente.findAll({where : {id_cliente : 1}, include: {model: db.infoc_tdv_endereco, as :'infoc_tdv_enderecos'}});
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

export default app;