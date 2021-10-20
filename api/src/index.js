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

        let u = await db.infoc_tdv_cliente.findOne({ where: { ds_email: usuParam.email, ds_senha: usuParam.senha, nm_cliente: usuParam.nome ,ds_cpf:usuParam.cpf , dt_nascimento:usuParam.datanas} });
        if (u != null)
            return resp.send({ erro: 'Todos os campos são obrigatorios' });

        let r = await db.infoc_tdv_cliente.create({
            ds_email: usuParam.email,
            ds_senha: crypto.SHA256(usuParam.senha).toString(crypto.enc.Base64),
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



app.post('/login', async (req, resp) => {
    const email = req.body.email;
    const senha = req.body.senha;

    

    let u = await db.infoc_tdv_cliente.findOne({
        where: {
            ds_email: email,
            ds_senha: senha
        },
    });
    if (u == null)
    return resp.send({ erro: 'Credenciais inválidas!' });
    
    resp.send(u);
});

app.get('/suaInfo', async (req, resp)=>{
    try{
        let cont = await db.infoc_tdv_cliente.findAll();
        resp.send(cont);
    }catch(e){
        resp.send({erro: e.toString()});
    }

});


app.listen(process.env.PORT, x => console.log(`Server up at port ${process.env.PORT}`))