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

app.post('/login', async (req, resp) => {
    const email = req.body.email;
    const senha = req.body.senha;
    const cryptoSenha = crypto.SHA256(senha).toString(crypto.enc.Base64);

    let u = await db.infoc_tdv_cliente.findOne({
        where: {
            ds_email: email,
            ds_senha: cryptoSenha
        },
        raw: true
    });

    if (u == null)
        return resp.send({ erro: 'Credenciais inválidas!' });

    delete u.ds_senha;
    resp.send(u);
});

app.listen(process.env.PORT, x => console.log(`Server up at port ${process.env.PORT}`))