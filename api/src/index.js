
import adm from './controller/adm.js'
<<<<<<< HEAD
import livros from './controller/adm.js'
import login from './controller/adm.js'
=======
import livros from './controller/livros.js'
import login from './controller/login.js'
>>>>>>> 13be1acac1f939c3bf86064730aa364c51402db8
import usuario from './controller/usuario.js'

import express from 'express'
import cors from 'cors'



const server = express();
server.use(cors()); 
server.use(express.json());



// adm
server.use('/adiministrador', adm);

// livros
server.use('/livros', livros);


// login/cadastro/esqueci a senha
server.use('/login', login);

// usuario
server.use('/usuario', usuario);



server.listen(process.env.PORT, x => console.log(`Server up at port ${process.env.PORT}`));


