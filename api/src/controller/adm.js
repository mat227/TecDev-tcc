import db from "../db.js";

import Sequelize from 'sequelize';
const { Op, col, fn } = Sequelize;


import express from "express";
const app = express.Router();



app.post('/addlivro', async (req, resp) =>{
    let info = req.body;
    try{
        if(info.livro == null || info.livro == undefined || info.livro == '' )
            return resp.send({erro :"o campo livro esta vazio"});
        if(info.descricao== null || info.descricao == undefined || info.descricao == '' )
            return resp.send({erro :"o campo descrição esta vazio"});
        if(info.vpara == null || info.vpara == undefined || info.vpara <=  0 )
            return resp.send({erro :"o campo valor não deve esta com uma valor igual a zero ou menor que zero, coloque o valor"});
        if( info.vde == null ||  info.vde == undefined ||  info.vde <= 0 )
            return resp.send({erro :"o campo valor não deve esta com uma valor igual a zero ou menor que zero, coloque o valor"});
        if( info.datac == null ||  info.datac == undefined ||  info.datac == '' )
            return resp.send({erro :"o campo da data esta vazio"});
        if( info.autor == null ||  info.autor == undefined ||  info.autor == '' )
            return resp.send({erro :"o campo autor esta vazio"});
        if(  info.editora == null ||  info.editora == undefined ||   info.editora == '' )
            return  resp.send({erro :"o campo  editora esta vazio"});
        if( info.genero == null ||  info.genero == undefined ||  info.genero == '' )
            return   resp.send({erro :"o campo genero esta vazio"});
        if( info.disponivel == null ||  info.disponivel == undefined ||  info.disponivel < 0)
            return    resp.send({erro :"o campo disponivel esta errado só é permitido sim(1) ou nao(0)"});
        if( info.qtd == null ||  info.qtd == undefined ||  info.qtd <=  0)
            return    resp.send({erro :"o campo quantidade colocou um numero abaixo de zero "});
        if(info.imagem == null ||  info.imagem== undefined || info.imagem == '' )
            return    resp.send({erro :"o campo da brochura está vazio, por favor insira um numero"});
        if( info.brochura == null ||  info.brochura == undefined ||  info.brochura < 0 )
            return resp.send({erro :"o campo sobre acabamento esta errado, só é permitido sim(1) ou nao(0)"});
        if( info.promocao == null ||  info.promocao == undefined ||  info.promocao <  0)
            return resp.send({erro :"o campo promoção esta errado, só é permitido sim(1) ou nao(0)"});
        let r = await db.infoc_tdv_livro.create({
            nm_livro : info.livro, ds_descricao : info.descricao, vl_para : info.vpara,
            vl_de : info.vde, dt_lancamento : info.datac , ds_autora : info.autor , ds_editora : info.editora,
            id_genero : info.genero,  bt_disponivel : info.disponivel, qtd_disponivel : info.qtd,
            ds_imagen : info.imagem, ds_brochura : info.brochura, ds_promocao : info.promocao, 
        })
        resp.send(r);
    }
    catch(e){
        resp.send(e.toString());
    }
})
app.put('/alterandoLivro/:id', async (req,resp)=> {
    try{
        let {livro, descricao, vpara,vde,datac, autor, editora, genero, disponivel, qtd, imagem, brochura, promocao} = req.body;
        if(livro == null || livro == undefined || livro == '' )
            return   resp.send({erro :"o campo livro esta vazio"});
        if(descricao== null || descricao == undefined || descricao == '' )
            return   resp.send({erro :"o campo descrição esta vazio"});
        if(vpara == null || vpara == undefined || vpara <=  0 )
            return resp.send({erro :"o campo valor não deve esta com uma valor igual a zero ou menor que zero, coloque o valor"});
        if( vde == null ||  vde == undefined ||  vde <= 0 )
            return resp.send({erro :"o campo valor não deve esta com uma valor igual a zero ou menor que zero, coloque o valor"});
        if( datac === null ||  datac === undefined ||  datac === "" )
            return resp.send({erro :"o campo da data esta vazio"});
        if( autor == null ||  autor == undefined ||  autor == '' )
            return  resp.send({erro :"o campo autor esta vazio"});
        if( editora == null ||  editora == undefined || editora == '' )
            return   resp.send({erro :"o campo  editora esta vazio"});
        if( genero == null ||  genero == undefined ||  genero == '' )
            return   resp.send({erro :"o campo genero esta vazio"});
        if( disponivel == null || disponivel == undefined || disponivel < 0)
            return   resp.send({erro :"o campo disponivel esta errado só é permitido sim(1) ou nao(0)"});
        if( qtd == null || qtd == undefined || qtd <=  0)
            return   resp.send({erro :"o campo quantidade colocou um numero abaixo de zero "});
        if( imagem == null || imagem== undefined || imagem == '' )
            return   resp.send({erro :"o campo da imagem está vazio, por favor insira uma imagem"});
        if( brochura == null || brochura == undefined ||  brochura < 0 )
            return   resp.send({erro :"o campo sobre acabamento esta errado, só é permitido sim(1) ou nao(0)"});
        if( promocao == null || promocao == undefined ||  promocao <  0)
            return   resp.send({erro :"o campo promoção esta errado, só é permitido sim(1) ou nao(0)"});
        
        let a = await db.infoc_tdv_livro.update(
        {
            nm_livro : livro,
            ds_descricao : descricao,
            vl_para : vpara,
            vl_de : vde,
            dt_lancamento : datac,
            ds_autora : autor,
            ds_editora : editora,
            ds_genero : genero,
            bt_disponivel : disponivel,
            qtd_disponivel : qtd,
            ds_imagen : imagem,
            ds_brochura : brochura,
            ds_promocao : promocao
        },{
            where :{ id_livro : req.params.id}
        })
        resp.send(a);
    }
    catch(e){
        resp.send(e.toString());
    }
})
// Lista livros na tela do adm

    
app.get ('/listaLivro', async (req, resp) => {
    try {

        let x = await db.infoc_tdv_livro.findAll({
            where: {
                ds_promocao: false
            }
        })
        resp.send(x);
    }catch (e){
        resp.send({ erro: e.toString() })
    }
})


app.get('/addlivro', async (req,resp ) =>{
    
    try{
      let a  =  await db.infoc_tdv_livro.findAll( );
      resp.send(a);
   }

   catch(e){
      resp.send ( { erro : e.toString( ) } );
   }
})

app.get('/generos', async (req, resp)=> {

    try{
        let generos=req.query.id;
        let r = await db.infoc_tdv_genero.findAll({
            where:
            {
                id_genero: generos
            }
        });
        resp.send(r);
    }catch(e){
        resp.send({erro : e.toString()});
    }
})

app.delete('/dellivro/:id', async (req, resp) => {
    try {
        let r = await db.infoc_tdv_livro.destroy({ where: { id_livro: req.params.id} });
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }})


    app.post('/addCupom', async (req, resp) =>{
        let {nome, dataduracao, porce ,regra} = req.body;
        try{
            if(nome == null ||  nome == undefined || nome == "")
                return  resp.send({ erro : 'o campo nome do livro esta vaizo, coloque um nome'});
            if(dataduracao == null ||  dataduracao == undefined || dataduracao == "")
                return  resp.send({ erro : 'o campo da data não foi preenchido por favor preenchar'});
            if(porce === null ||  porce === undefined || porce === 0)
                return  resp.send({ erro : 'o campo de porcetagem esta vazio por favor coloque uma valor valido'});
            if(regra === null ||  regra === undefined || regra === "")
                return  resp.send({ erro : 'o campo regra esta vazio por favor preenchar '});
            var r = await db.infoc_tdv_cupom.create({ds_nome : nome , vl_porcentagem : porce, ds_regra : regra , dt_duracao : dataduracao});
            resp.send(r);
        }catch(e)
        {
            resp.send({erro : e.toString()});
        }
    })
    
    app.get('/cupom', async (req,resp ) =>{
        
        try{
          let a  =  await db.infoc_tdv_cupom.findAll( );
          resp.send(a);
       }
    
       catch(e){
          resp.send ( { erro : e.toString( ) } );
       }
    })
    

    

//  Pedidos
app.get('/pedido', async (req, resp) => {

    var r =  await db.infoc_tdv_pedido.findAll(
       { include: {
            model : db.infoc_tdv_cliente, as : 'id_cliente_infoc_tdv_cliente',
            include : {
                model : db.infoc_tdv_endereco, as : 'infoc_tdv_enderecos'
            }
        }}
    );
})


// pegando informação  dos  clientes 

app.get('/infoA', async (req, resp) => {

    try{
        var r = await db.infoc_tdv_adm.findAll();
        resp.send(r);
    }catch(e){
        resp.send({erro : e.toString()});
    }
    
    

})





export default app;