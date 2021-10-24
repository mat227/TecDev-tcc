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


app.get('/suaInfo/', async (req, resp)=>{
    try{
        let usu = await db.infoc_tdv_endereco.findOne({where:{id_cliente :req.body.id}});
        let test = await db.infoc_tdv_cliente.findAll({
            where: {id_cliente: usu.id_cliente}, 
            include:['infoc_tdv_endereco','infoc_tdv_cliente'],
        });
        //let cont = await db.infoc_tdv_cliente.findAll({include: {model: db.infoc_tdv_endereco, as :'test'}});
        resp.send(test);
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
        let r = await db.infoc_tdv_livro.create({
            nm_livro : info.livro, ds_descricao : info.descricao, vl_para : info.vpara,
            vl_de : info.vde, dt_lancamento : new Date() , ds_autora : info.autor , ds_editora : info.editora,
            id_genero : info.genero,  bt_disponivel : info.disponivel, qtd_disponivel : info.qtd,
            ds_imagem : info.imagem, ds_brochura : info.brochura, ds_promocao : info.promocao
        })
        resp.send(r);
    }
    catch(e){
        resp.send(e.toString());
    }
})




    



app.listen(process.env.PORT, x => console.log(`Server up at port ${process.env.PORT}`))