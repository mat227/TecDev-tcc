
import express from 'express';
import cors from 'cors';
import crypto from 'crypto-js';
import db from '../src/db.js';


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

        let r = await db.infoc_tdv_cliente.create({
            ds_email: usuParam.email,
            ds_senha: crypto.SHA256(usuParam.senha).toString(crypto.enc.Base64),
            nr_contato: usuParam.telefone,
            nm_cliente: usuParam.nome,
            ds_cpf: usuParam.cpf,
            dt_nascimento:usuParam.datanas
          
        })
        resp.send(r);
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
            resp.send({erro :"o campo livro esta vazio"});
        if(info.descricao== null || info.descricao == undefined || info.descricao == '' )
            resp.send({erro :"o campo descrição esta vazio"});
        if(info.vpara == null || info.vpara == undefined || info.vpara <=  0 )
            resp.send({erro :"o campo valor não deve esta com uma valor igual a zero ou menor que zero, coloque o valor"});
        if( info.vde == null ||  info.vde == undefined ||  info.vde <= 0 )
            resp.send({erro :"o campo valor não deve esta com uma valor igual a zero ou menor que zero, coloque o valor"});
        if( info.data == null ||  info.data == undefined ||  info.data == '' )
            resp.send({erro :"o campo da data esta vazio"});
        if( info.autor == null ||  info.autor == undefined ||  info.autor == '' )
            resp.send({erro :"o campo autor esta vazio"});
        if(  info.editora == null ||  info.editora == undefined ||   info.editora == '' )
            resp.send({erro :"o campo  editora esta vazio"});
        if( info.genero == null ||  info.genero == undefined ||  info.genero == '' )
            resp.send({erro :"o campo genero esta vazio"});
        if( info.disponivel == null ||  info.disponivel == undefined ||  info.disponivel < 0)
            resp.send({erro :"o campo disponivel esta errado só é permitido sim(1) ou nao(0)"});
        if( info.qtd == null ||  info.qtd == undefined ||  info.qtd <=  0)
            resp.send({erro :"o campo quantidade colocou um numero abaixo de zero "});
        if(info.imagem == null ||  info.imagem== undefined || info.imagem == '' )
            resp.send({erro :"o campo da imagem está vazio, por favor insira uma imagem"});
        if( info.brochura == null ||  info.brochura == undefined ||  info.brochura < 0 )
            resp.send({erro :"o campo sobre acabamento esta errado, só é permitido sim(1) ou nao(0)"});
        if( info.promocao == null ||  info.promocao == undefined ||  info.promocao <  0)
            resp.send({erro :"o campo promoção esta errado, só é permitido sim(1) ou nao(0)"});
        let r = await db.infoc_tdv_livro.create({
            nm_livro : info.livro, ds_descricao : info.descricao, vl_para : info.vpara,
            vl_de : info.vde, dt_lancamento : info.data , ds_autora : info.autor , ds_editora : info.editora,
            id_genero : info.genero,  bt_disponivel : info.disponivel, qtd_disponivel : info.qtd,
            ds_imagem : info.imagem, ds_brochura : info.brochura, ds_promocao : info.promocao, 
        })
        resp.send(r);
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


app.delete('/addlivro/:id', async (req, resp) => {
    try {
        let r = await db.infoc_tdv_livro.destroy({ where: { id_livro: req.params.id} });
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
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


app.listen(process.env.PORT, x => console.log(`Server up at port ${process.env.PORT}`));