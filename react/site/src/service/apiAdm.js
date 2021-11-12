import axios from 'axios'
const api = axios.create({
    baseURL : 'http://localhost:3030/administrador'
    //baseURL: 'https://tecdevtcc.herokuapp.com/administrador'

})



export default class Api {
    

  
    async listarLivro() {
        let r = await api.get(`/listaLivro`);
        return r.data;
    }
    
    // lista livros pagina do adm
    async listaLivroAdm(){
        let r = await api.get(`/listaLivro`);
        return r.data;
    }
    //deletar livro 
    async deletaLivro(id){
        let r = await api.delete(`/dellivro/${id}`)
        return r.data;
    }
    //put do livro
    async atualizarLivro(id, livro, descricao, vpara,vde,datac, autor, editora, genero, disponivel, qtd, imagem, brochura, promocao){
        let pack ={
            livro : livro,
            descricao : descricao,
            vpara : vpara,
            vde : vde,
            datac : datac,
            autor : autor,
            editora : editora,
            genero : genero,
            disponivel : disponivel,
            qtd : qtd,
            imagem : imagem,
            brochura : brochura,
            promocao : promocao
            
        }
        let r = await api.put('/alterandoLivro/'+ id, pack);
        return r.data;
    }
    //parte adm 
   

   
    async cadastrarLivro(livro, descricao, vpara, vde,datac, autor, editora, genero, disponivel,qtd,imagem,brochura,promocao) {
        let naomexa = {
            livro: livro,
            descricao: descricao,
            vpara: vpara,
            vde: vde,
            datac : datac,
            autor: autor,
            editora: editora,
            genero: genero,
            disponivel:disponivel,
            qtd:qtd,
            imagem: imagem,
            brochura:brochura,
            promocao:promocao
            
        }

        let r = await api.post(`/addlivro`,naomexa);
        return r.data
    }

   
    // infomaçoes do adm v1
    async infoA() {
        let r = await api.get(`/infoA`);
        return r.data;
    }
    // Lista  pedidos
    async listP(){
        let r = await api.get('/pedido');
        return r.data;
    }
    async deletePedido(id){
        let r = await api.delete(`/delpedido/${id}`);
        return r.data;
    }
    async alteraSituacao(id, sito){
        let sit = {
            situacao : sito
        }
        let r = await api.put(`/altsit/${id}`, sit);
        return r.data;
    }


}