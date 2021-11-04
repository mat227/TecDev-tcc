import db from "../db.js";

import Sequelize from 'sequelize';
const { Op, col, fn } = Sequelize;


import express from "express";
const app = express.Router();




app.get ('/generos', async (req, resp) => {
    try {
    
    let generos = await db.infoc_tdv_genero.findAll
        ({ 
            order: [['id_genero', 'desc']]
         })
    resp.send(generos);
    } catch(e) {
              resp.send({ erro:e.toString() })
    }
    })
app.post ('/generos', async (req, resp) => {
    try {
        const descricao = req.body.descricao;

        let x = await db.infoc_tdv_genero.findAll({
            where: {
                ds_genero: descricao
            }
        })
        resp.send(x);
    }catch (e){
        resp.send({ erro: e.toString() })
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

app.post('/pagamento', async (req, resp) => {
    try {
        let usuParam = req.body;

        let u = await db.infoc_tdv_forma_pagamento.findOne({ where: {  nr_cartao: usuParam.nrcartao, nm_titular_cartao: usuParam.titular ,nm_sobrenome_cartao:usuParam.sobrenome , dt_vencimento:usuParam.vencimento, nr_parcelas: usuParam.parcelas, ds_cvv: usuParam.cvv} });
        if (u != null)
            return resp.send({ erro: 'Todos os campos são obrigatorios' });

        let r = await db.infoc_tdv_forma_pagamento.create({
            nr_cartao: crypto.SHA256(usuParam.nrcartao).toString(crypto.enc.Base64),
            nm_titular_cartao: usuParam.titular,
            nm_sobrenome_cartao: usuParam.sobrenome,
            dt_vencimento:usuParam.vencimento,
            nr_parcelas:usuParam.parcelas,
            ds_cvv:usuParam.cvv
          
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!' })
    }
})


// Busca

app.get('/busca', async (req,resp) => {
    try {
        let search = req.query.search;
        let r = await db.infoc_tdv_livro.findAll( 
            { where: {
                [Op.or]: [
                    { 'nm_livro': {[Op.like]: `%${search}%` }},
                    { 'ds_descricao': {[Op.like]: `%${search}%` }},
                    { 'ds_autora': {[Op.like]: `%${search}%` }},
                    { 'ds_editora': {[Op.like]: `%${search}%` }}
                ],

            },
         });
        resp.send(r);

    } catch(e) {
        resp.send({ erro: e.toString()})
    }
})
export default app;