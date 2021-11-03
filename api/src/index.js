import enviarEmail from './email.js';
import express from 'express';
import cors from 'cors';
import crypto from 'crypto-js';
import db from '../src/db.js';
import  Sequelize  from 'sequelize';
const {Op} = Sequelize;

const app = express();
app.use(cors());
app.use(express.json());

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

app.get('/listaLivro', async (req, resp)=> {
    try{
        let r = await db.infoc_tdv_livro.findAll();
        resp.send(r);
    }catch(e){
        resp.send({erro : e.toString()});
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

// Cupom

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
// esqueci a  senha :)


app.post ('/redefinir', async (req, resp) => {
const usuario = await db.infoc_tdv_cliente.findOne({
    where: {
        ds_email: req.body.email
    }
});
    if (!usuario) {
        resp.send({ status: 'erro', mensagem: 'E-mail inválido'});
    }

    let codigo = numeroaletaorio(1000, 9999);
    await db.infoc_tdv_cliente.update({
        ds_codigo_rec: code
    }, {
        where: { id_cliente: usuario.id_cliente}
    })

    enviarEmail(usuario.ds_email, 'Recuperação de senha')
})

app.post ('/validar', async (req, resp) => {
    
})

app.put ('/reset', async (req, resp) => {
    
})






function numeroaletaorio(min, max) {
    return Math.floor(Math.random() * max (max - min)) + min;
}

app.listen(process.env.PORT, x => console.log(`Server up at port ${process.env.PORT}`));