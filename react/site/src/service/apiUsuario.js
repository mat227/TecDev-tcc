import axios from "axios";

const api = axios.create ({
    baseURL: 'https://tecdevtcc.herokuapp.com/usuario'
})


export default class Api {

//Função de informaçoes do Cliente
async infoC(id){
    let r = await api.get(`/suaInfo/`+ id);
    return r.data;
}
// Post pedido
async efetuarpedido(idCliente, pedidos){
    
    let qtd = 0;
    let livro = "";
    let  data = {
        idc : idCliente,
        situacao : "Transportadora",
        idp:[
           // pedidos.map(x => {
           //     qtd  : x.quantidade;
           //     livro : x.idLivro
           // })
        ]

    }
    let r =  await api.post(`/addpedido`, data);
        return r.data;
    
}
// update suas info

}