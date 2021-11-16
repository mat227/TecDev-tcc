import axios from "axios";

const api = axios.create ({
    //baseURL: 'http://localhost:3030/login'
    baseURL: 'https://tecdevtcc.herokuapp.com/login'
})

export default class Api {

async loginn(email, senha) {
    let a = {email,senha}
    let r = await api.post(`/login`, a);
    return r.data;
}

async loginadm(email, senha) {
    let a = {email,senha}
    console.log(email)
    console.log(senha)
    let r = await api.post(`/loginadm`, a);
    return r.data;
}
async cadastro(email, senha,telefone, nome, cpf, datanas,nomerua,cep,numerocasa,bairro,complemento) {
    let cadastroJson = {
        email: email,
        senha: senha,
        telefone:telefone,
        nome: nome,
        cpf: cpf,
        datanas: datanas,
        nomerua:nomerua,
        cep:cep,
        numerocasa:numerocasa,
        bairro:bairro,
        complemento:complemento
        
    }

    let r = await api.post(`/cadastro`, cadastroJson );
    return r.data
}


 // /// teste nico
    async recuperar(email) {
        let a = {email}
        let r = await api.post(`/redefinir`, a);
        return r.data;
    }

   
}