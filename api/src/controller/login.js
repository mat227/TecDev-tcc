import db from "../db.js";
import enviarEmail from '../email.js';
import crypto from 'crypto-js';

import Sequelize from 'sequelize';
const { Op, col, fn } = Sequelize;


import express from "express";
const app = express.Router();




 app.post('/cadastro', async (req, resp) => {
     try {
         let usuParam = req.body;

         let u = await db.infoc_tdv_cliente.findOne({ where: { ds_email: usuParam.email, ds_senha: usuParam.senha,nr_contato:usuParam.telefone ,nm_cliente: usuParam.nome ,ds_cpf:usuParam.cpf , dt_nascimento:usuParam.datanas} });
         if (u != null)
             return resp.send({ erro: 'Todos os campos são obrigatorios' });

        
         let b = await db.infoc_tdv_endereco.findOne({ where: { nm_rua: usuParam.nomerua, ds_cep: usuParam.cep,ds_numero:usuParam.numerocasa ,ds_bairro: usuParam.bairro ,ds_complemento:usuParam.complemento} });
         if (b != null)
          return resp.send({ erro: 'Todos os campos são obrigatorios' });

         const informacoes = await db.infoc_tdv_cliente.create({
             ds_email: usuParam.email,
             ds_senha: crypto.SHA256(usuParam.senha).toString(crypto.enc.Base64),
             nr_contato: usuParam.telefone,
             nm_cliente: usuParam.nome,
             ds_cpf: usuParam.cpf,
             dt_nascimento:usuParam.datanas
          
         })
         const endereco = await db.infoc_tdv_endereco.create({
             id_cliente: informacoes.id_cliente,
             nm_rua:usuParam.nomerua,
             ds_cep: usuParam.cep,
             ds_numero: usuParam.numerocasa,
             ds_bairro: usuParam.bairro,
             ds_complemento:usuParam.complemento
          
         })
         resp.send({mensagem:"Cadastrado com sucesso"});

     } catch (e) {
         resp.send({ erro: 'Ocorreu um erro!' })
     }
 })


 app.get('/cadastro', async (req, resp) => {
     try {
         let cliente = await db.infoc_tdv_cliente.findAll();
         resp.send(cliente);
     } catch (e) {
         resp.send({ erro: 'Ocorreu um erro!' })
     }
 })


 app.get('/endereco', async (req, resp) => {
     try {
         let endereco = await db.infoc_tdv_endereco.findAll();
         resp.send(endereco);
     } catch (e) {
         resp.send({ erro: 'Ocorreu um erro!' })
     }
 })



 app.post('/login', async (req, resp) => {
     let email = req.body;
     const senha = req.body.senha;
     const cryptoSenha = crypto.SHA256(senha).toString(crypto.enc.Base64);

    

     let u = await db.infoc_tdv_cliente.findOne({
         where: {
             ds_email: email.email,
             ds_senha: cryptoSenha
         },
         raw: true

     });
     if (u === null)
      return resp.send({ erro: 'Credenciais inválidas!' });
    
     resp.send(u);
 });






 app.post ('/redefinir', async (req, resp) => {
     const usuario = await db.infoc_tdv_cliente.findOne({
         where: {
             ds_email: req.body.email
         }
     });
     if (!usuario) {
         resp.send({ status: 'erro', mensagem: 'E-mail inválido'});
     }

     let code = getRandomInteger(1000, 9999);
     await db.infoc_tdv_cliente.update({
         ds_codigo_rec: code
     }, {
         where: { id_cliente: usuario.id_cliente}
     })

     enviarEmail(usuario.ds_email, 'Recuperação de senha', `
     <h1>Recuperação de Senha</h1>
     <p>Você solicitou a recuperação de senha da sua conta.</p>
     <p>Entre com o código ${code} para prosseguir com a recuperação</p>
     `)

     resp.send( {status: 'ok'});
 })

 app.post ('/validar', async (req, resp) => {
     console.log('api')
     const usuario = await db.infoc_tdv_cliente.findOne({
         where: {
             ds_email: req.body.email
         }
     });
     if (!usuario) {
         resp.send({ status: 'erro', mensagem: 'E-mail inválido'});
     }

     if (usuario.ds_codigo_rec !== req.body.codigo){
         resp.send({ status: 'erro', mensagem: 'Código Inválido'});
     }
     resp.send({ status: 'ok', mensagem: 'Código validado'});
 })


 
 app.put ('/reset', async (req, resp) => {
     const usuario = await db.infoc_tdv_cliente.findOne({
         where: {
             ds_email: req.body.email
         }
     });
     if (!usuario) {
         resp.send({ status: 'erro', mensagem: 'E-mail inválido'});
     }
    
     if (usuario.ds_codigo_rec !== req.body.codigo || usuario.ds_codigo_rec === ''){
         resp.send({ status: 'erro', mensagem: 'Código Inválido'});
     }
    
     await db.infoc_tdv_cliente.update({
         ds_senha: req.body.novaSenha,
         ds_codigo_rec:''
     }, {
        where: { id_cliente: usuario.id_cliente}
     });

     resp.send({ status: 'ok', mensagem: 'senha alterada'});
 })

 



 function getRandomInteger(min, max) {
     return Math.floor(Math.random() * (max - min) ) + min;
   }

 app.get ('/redefinir', async (req, resp) => {
     try {
     let x = await db.infoc_tdv_cliente.findAll()
     resp.send(x);
     } catch(e) {
               resp.send({ erro:e.toString() })
     }
});


export default app;