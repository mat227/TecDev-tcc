import db from './db.js';
import express from 'express'
import cors from 'cors';
import crypto from 'crypto-js';

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

        let u = await db.infoc_tdv_cliente.findOne({ where: { ds_email: usuParam.email, ds_senha: usuParam.senha } });
        if (u != null)
            return resp.send({ erro: 'Conta já existe!' });

        let r = await db.infoc_tdv_cliente.create({
            ds_email: usuParam.email,
            ds_senha: crypto.SHA256(usuParam.senha).toString(crypto.enc.Base64)
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!' })
    }
})




app.listen(process.env.PORT, x => console.log(`Server up at port ${process.env.PORT}`))