import db from "../db.js";
import enviarEmail from '../email.js';
import crypto from 'crypto-js';

import Sequelize from 'sequelize';
const { Op, col, fn } = Sequelize;


import express from "express";
const app = express.Router();




 app.post('/cadastro', async (req, resp) => {
     try {
         let {email, senha, telefone,nome,cpf, datanas,nomerua,cep,numerocasa,bairro,complemento} = req.body;
         let u = await db.infoc_tdv_cliente.findOne({ where: { ds_email: email, ds_senha: senha,nr_contato:telefone ,nm_cliente: nome ,ds_cpf:cpf , dt_nascimento:datanas} });
         if( nome == "") {
            return resp.send({erro: 'O campo Nome é obrigatório'})
        }
        if( cpf == "") {
            return resp.send({erro: 'O campo C.P.F é obrigatório'})
        }
         if( email == "") {
            return resp.send({erro: 'O campo Email é obrigatório'})
        }
        if( senha == "") {
            return resp.send({erro: 'O campo Senha é obrigatório'})
        }
        if( datanas == "") {
            return resp.send({erro: 'O campo Data de Nascimento é obrigatório ou está inválido'})
        }
        if( telefone == "") {
            return resp.send({erro: 'O campo Telefone é obrigatório'})
        }
        if( cep == "") {
            return resp.send({erro: 'O campo CEP é obrigatório'})
        }
     
        if( nomerua == "") {
            return resp.send({erro: 'O campo Endereço é obrigatório'})
        }
     
        if( numerocasa == "") {
            return resp.send({erro: 'O campo Número é obrigatório'})
        }
        if( complemento == "") {
            return resp.send({erro: 'O campo Complemento é obrigatório'})
        }
        if( bairro == "") {
            return resp.send({erro: 'O campo Bairro é obrigatório'})
        }

        
         let b = await db.infoc_tdv_endereco.findOne({ where: { nm_rua: nomerua, ds_cep: cep,ds_numero:numerocasa ,ds_bairro: bairro ,ds_complemento:complemento} });
      


         const informacoes = await db.infoc_tdv_cliente.create({
             ds_email: email,
             ds_senha: crypto.SHA256(senha).toString(crypto.enc.Base64),
             nr_contato: telefone,
             nm_cliente: nome,
             ds_cpf: cpf,
             dt_nascimento:datanas
          
         })
         const endereco = await db.infoc_tdv_endereco.create({
             id_cliente: informacoes.id_cliente,
             nm_rua:nomerua,
             ds_cep: cep,
             ds_numero: numerocasa,
             ds_bairro: bairro,
             ds_complemento:complemento
          
         })
        resp.send(informacoes);

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
     if( email == "") {
        return resp.send({erro: 'O campo Email é obrigatório'})
    }
    if( senha == "") {
        return resp.send({erro: 'O campo Senha é obrigatório'})
    }
    
     let u = await db.infoc_tdv_cliente.findOne({
         where: {
             ds_email: email.email,
             ds_senha: cryptoSenha
         },

     });
    
     
    
    
     resp.send(u);
 });



 app.post('/loginadm', async (req, resp) => {
    let email = req.body;
    const senha = req.body.senha;
    const cryptoSenha = crypto.SHA256(senha).toString(crypto.enc.Base64);

    let u = await db.infoc_tdv_cliente.findAll({
        where: {
            ds_email: email.email && email === "Matheus@bookly.com.br" || "Nicoly@bookly.com.br" || "Thiago@bookly.com.br" || "Elias@bookly.com.br" || "Beatriz@bookly.com.br",
            ds_senha: cryptoSenha
        },

    });
    if (u === null)
     return resp.send({ erro: 'Credenciais inválidas!' });
   console.log(u);
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
     console.log(req.body)
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
    console.log(req.body)
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
         ds_senha: crypto.SHA256(req.body.novaSenha).toString(crypto.enc.Base64),
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