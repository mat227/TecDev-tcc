
import adm from './controller/adm.js'
import livros from './controller/adm.js'
import login from './controller/adm.js'
import usuario from './controller/adm.js'

import express from 'express'
import cors from 'cors'


const app = express();
app.use(cors());
app.use(express.json());

const server = express();
server.use(cors()); 
server.use(express.json());



// adm
server.use('/adiministrador', adm);

// livros
server.use('/livros', livros);


//login/cadastro/esqueci a senha
server.use('/login', login);

// usuario
server.use('/usuario', usuario);



app.listen(process.env.PORT, x => console.log(`Server up at port ${process.env.PORT}`));


