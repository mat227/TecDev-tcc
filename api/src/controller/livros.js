import db from "../db.js";

import Sequelize from 'sequelize';
const { Op, col, fn } = Sequelize;


import express from "express";
const app = express.Router();




    
app.post ('/generos', async (req, resp) => {
    try {
        const descricao = req.body.descricao;

        let x = await db.infoc_tdv_livro.findAll({
            where: {
                ds_genero: descricao
            }
        })
        resp.send(x);
    }catch (e){
        resp.send({ erro: e.toString() })
    }
})



    
app.get ('/livrospromocao', async (req, resp) => {
    try {

        let x = await db.infoc_tdv_livro.findAll({
            where: {
                ds_promocao: true
            }
        })
        resp.send(x);
    }catch (e){
        resp.send({ erro: e.toString() })
    }
})


    
app.get ('/livroterror', async (req, resp) => {
    try {

        let x = await db.infoc_tdv_livro.findAll({
            where: {
                id_genero: "Terror" || "terror"
            }
        })
        resp.send(x);
    }catch (e){
        resp.send({ erro: e.toString() })
    }
})


    
app.get ('/livropoesia', async (req, resp) => {
    try {

        let x = await db.infoc_tdv_livro.findAll({
            where: {
                id_genero: "Poesia" || "poesia"
            }
        })
        resp.send(x);
    }catch (e){
        resp.send({ erro: e.toString() })
    }
})


    
app.get ('/livrocomedia', async (req, resp) => {
    try {

        let x = await db.infoc_tdv_livro.findAll({
            where: {
                id_genero: "comedia" || "Comedia"
            }
        })
        resp.send(x);
    }catch (e){
        resp.send({ erro: e.toString() })
    }
})



  
app.get ('/livroromance', async (req, resp) => {
    try {

        let x = await db.infoc_tdv_livro.findAll({
            where: {
                id_genero: "Romance" || "romance"
            }
        })
        resp.send(x);
    }catch (e){
        resp.send({ erro: e.toString() })
    }
})


app.get ('/livrobiografia', async (req, resp) => {
    try {

        let x = await db.infoc_tdv_livro.findAll({
            where: {
                id_genero: "Biografia" || "biografia"
            }
        })
        resp.send(x);
    }catch (e){
        resp.send({ erro: e.toString() })
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