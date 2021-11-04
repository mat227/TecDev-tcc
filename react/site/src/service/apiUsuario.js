import axios from "axios";

const api = axios.create ({
    baseURL: 'http://localhost:3030/usuario'
})


export default class Api {

//Função de informaçoes do Cliente
async infoC(){
    let r = await api.get(`/suaInfo`);
    return r.data;
}


}